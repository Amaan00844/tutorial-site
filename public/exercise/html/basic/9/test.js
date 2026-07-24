const { HTMLHint } = require('htmlhint');
const cheerio = require('cheerio');
console.clear();
console.clear();
const fs = require('fs');
const path = require('path');

// File paths
const attemptsFile = path.join(__dirname, 'attempts.tests');
const resultFile = path.join(__dirname, 'results.tests');

// Read HTML
const html = fs.readFileSync('index.html', 'utf8');

// Helper: Read Attempts (default to 1)
function readAttempts() {
  if (fs.existsSync(attemptsFile)) {
    const data = fs.readFileSync(attemptsFile, 'utf8');
    try {
      const parsed = JSON.parse(data);
      return parsed.count >= 1 ? parsed.count : 1;
    } catch (err) {
      console.error('Error parsing attempts.tests. Resetting counter.');
      return 1;
    }
  }
  return 1;
}

// Helper: Write Attempt Count
function writeAttempts(count) {
  try {
    fs.writeFileSync(attemptsFile, JSON.stringify({ count }, null, 2));
  } catch (err) {
    console.error(`Failed to write to ${attemptsFile}: ${err.message}`);
  }
}

// Syntax Verification using HTMLHint
function syntaxVerify() {
  const rules = {
    'tagname-lowercase': true,
    'attr-lowercase': true,
    'doctype-first': true,
    'tag-pair': true,
    'attr-no-duplication': true,
    'attr-value-not-empty': true,
    'alt-require': true,
  };
  const results = HTMLHint.verify(html, rules);

  if (results.length === 0) {
    console.log('✔ HTML syntax is valid.');
    return true;
  } else {
    console.log('❌ HTML Syntax is not valid:');
    results.forEach((msg) => {
      console.log(`- [${msg.rule.id}] ${msg.message} (line ${msg.line})`);
    });
    return false;
  }
}

// Code Structure Verification for Basic HTML, Headings, Paragraphs, Links, Images, Lists, Tables, Forms, and Comments
function codeVerify($) {
  let allPassed = true;

  // Check for DOCTYPE manually from raw HTML
  if (!/^<!DOCTYPE html>/i.test(html.trim())) {
    console.log('✘ <!DOCTYPE html> declaration is missing or incorrect');
    allPassed = false;
  } else {
    console.log('✔ <!DOCTYPE html> is present');
  }

  // Structural tag checks
  function check(tag, description) {
    if ($(tag).length > 0) {
      console.log(`✔ ${description} exists`);
      return true;
    } else {
      console.log(`✘ ${description} is missing`);
      allPassed = false;
      return false;
    }
  }

  check('html', '<html>');
  check('head', '<head>');
  check('title', '<title>');
  check('body', '<body>');
  check('h1', '<h1> heading');

  // Specific title text check
  const titleText = $('title').text().trim();
  if (titleText === 'My First Page') {
    console.log('✔ <title> is correctly set to "My First Page"');
  } else {
    console.log(`✘ <title> should be "My First Page" but found "${titleText}"`);
    allPassed = false;
  }

  const headingText = $('h1').text().trim();
  if (headingText === 'Welcome to My Website') {
    console.log('✔ <h1> is correctly set to "Welcome to My Website"');
  } else {
    console.log(`✘ <h1> should be "Welcome to My Website" but found "${headingText}"`);
    allPassed = false;
  }

  // Heading checks (h2 to h6)
  const headingLevels = ['h2', 'h3', 'h4', 'h5', 'h6'];
  let previousLevelFound = check('h1', '<h1> heading'); // Track if previous level exists

  headingLevels.forEach((tag, index) => {
    const level = index + 2; // h2 is level 2, h3 is level 3, etc.
    if ($(tag).length > 0) {
      console.log(`✔ <${tag}> heading exists`);
      // Check for proper nesting (no skipping levels)
      if (!previousLevelFound) {
        console.log(`✘ <${tag}> should not appear before <h${level - 1}>`);
        allPassed = false;
      }
      previousLevelFound = true;
    } else {
      console.log(`✔ <${tag}> is optional and not present`);
      previousLevelFound = false; // Reset if current level is missing
    }
  });

  // Paragraph checks
  const paragraphs = $('body p');
  if (paragraphs.length > 0) {
    console.log(`✔ Found ${paragraphs.length} <p> tag(s) in <body>`);
    let allParagraphsValid = true;
    paragraphs.each((index, element) => {
      const text = $(element).text().trim();
      if (text === '') {
        console.log(`✘ Paragraph ${index + 1} is empty`);
        allParagraphsValid = false;
        allPassed = false;
      } else {
        console.log(`✔ Paragraph ${index + 1} contains text: "${text}"`);
      }
      // Check if paragraph is directly inside <body>
      const parentTag = $(element).parent().prop('tagName').toLowerCase();
      if (parentTag !== 'body') {
        console.log(`✘ Paragraph ${index + 1} is not directly inside <body> (found inside <${parentTag}>)`);
        allParagraphsValid = false;
        allPassed = false;
      }
    });
    if (allParagraphsValid) {
      console.log('✔ All paragraphs are valid and properly placed');
    }
  } else {
    console.log('✘ At least one <p> tag is required in <body>');
    allPassed = false;
  }

  // Link checks
  const links = $('body a');
  if (links.length > 0) {
    console.log(`✔ Found ${links.length} <a> tag(s) in <body>`);
    let allLinksValid = true;
    links.each((index, element) => {
      const href = $(element).attr('href');
      const text = $(element).text().trim();
      // Check for non-empty href
      if (!href || href.trim() === '') {
        console.log(`✘ Link ${index + 1} has missing or empty href attribute`);
        allLinksValid = false;
        allPassed = false;
      } else {
        // Basic URL format check
        const urlPattern = /^(https?:\/\/|\/|mailto:|#)/;
        if (!urlPattern.test(href)) {
          console.log(`✘ Link ${index + 1} has invalid href value: "${href}"`);
          allLinksValid = false;
          allPassed = false;
        } else {
          console.log(`✔ Link ${index + 1} has valid href: "${href}"`);
        }
      }
      // Check for non-empty link text
      if (text === '') {
        console.log(`✘ Link ${index + 1} has no text content`);
        allLinksValid = false;
        allPassed = false;
      } else {
        console.log(`✔ Link ${index + 1} contains text: "${text}"`);
      }
      // Check if link is inside valid container
      const parentTag = $(element).parent().prop('tagName').toLowerCase();
      const validContainers = ['body', 'p', 'div', 'section', 'article', 'nav', 'footer', 'header'];
      if (!validContainers.includes(parentTag)) {
        console.log(`✘ Link ${index + 1} is not inside a valid container (found inside <${parentTag}>)`);
        allLinksValid = false;
        allPassed = false;
      } else {
        console.log(`✔ Link ${index + 1} is properly placed inside <${parentTag}>`);
      }
    });
    if (allLinksValid) {
      console.log('✔ All links are valid and properly placed');
    }
  } else {
    console.log('✘ At least one <a> tag is required in <body>');
    allPassed = false;
  }

  // Image checks
  const images = $('body img');
  if (images.length > 0) {
    console.log(`✔ Found ${images.length} <img> tag(s) in <body>`);
    let allImagesValid = true;
    images.each((index, element) => {
      const src = $(element).attr('src');
      const alt = $(element).attr('alt');
      // Check for non-empty src
      if (!src || src.trim() === '') {
        console.log(`✘ Image ${index + 1} has missing or empty src attribute`);
        allImagesValid = false;
        allPassed = false;
      } else {
        // Basic image source format check
        const imgPattern = /^(https?:\/\/|\.\/|\/|[a-zA-Z0-9_-]+\.(jpg|jpeg|png|gif|svg|webp))/i;
        if (!imgPattern.test(src)) {
          console.log(`✘ Image ${index + 1} has invalid src value: "${src}"`);
          allImagesValid = false;
          allPassed = false;
        } else {
          console.log(`✔ Image ${index + 1} has valid src: "${src}"`);
        }
      }
      // Check for non-empty alt text
      if (!alt || alt.trim() === '') {
        console.log(`✘ Image ${index + 1} has missing or empty alt attribute`);
        allImagesValid = false;
        allPassed = false;
      } else {
        console.log(`✔ Image ${index + 1} has alt text: "${alt}"`);
      }
      // Check if image is inside valid container
      const parentTag = $(element).parent().prop('tagName').toLowerCase();
      const validContainers = ['body', 'p', 'div', 'section', 'article', 'figure', 'header', 'footer'];
      if (!validContainers.includes(parentTag)) {
        console.log(`✘ Image ${index + 1} is not inside a valid container (found inside <${parentTag}>)`);
        allImagesValid = false;
        allPassed = false;
      } else {
        console.log(`✔ Image ${index + 1} is properly placed inside <${parentTag}>`);
      }
    });
    if (allImagesValid) {
      console.log('✔ All images are valid and properly placed');
    }
  } else {
    console.log('✘ At least one <img> tag is required in <body>');
    allPassed = false;
  }

  // List checks (ul or ol)
  const lists = $('body ul, body ol');
  if (lists.length > 0) {
    console.log(`✔ Found ${lists.length} list(s) (<ul> or <ol>) in <body>`);
    let allListsValid = true;
    lists.each((index, element) => {
      const tagName = $(element).prop('tagName').toLowerCase();
      // Check for at least one <li> with non-empty text
      const listItems = $(element).find('li');
      if (listItems.length === 0) {
        console.log(`✘ List ${index + 1} (<${tagName}>) has no <li> items`);
        allListsValid = false;
        allPassed = false;
      } else {
        console.log(`✔ List ${index + 1} (<${tagName}>) has ${listItems.length} <li> item(s)`);
        let allItemsValid = true;
        listItems.each((itemIndex, item) => {
          const text = $(item).text().trim();
          if (text === '') {
            console.log(`✘ List ${index + 1} (<${tagName}>) item ${itemIndex + 1} is empty`);
            allItemsValid = false;
            allListsValid = false;
            allPassed = false;
          } else {
            console.log(`✔ List ${index + 1} (<${tagName}>) item ${itemIndex + 1} contains text: "${text}"`);
          }
        });
        if (allItemsValid) {
          console.log(`✔ List ${index + 1} (<${tagName}>) has valid items`);
        }
      }
      // Check if list is inside valid container
      const parentTag = $(element).parent().prop('tagName').toLowerCase();
      const validContainers = ['body', 'div', 'section', 'article', 'nav', 'header', 'footer'];
      if (!validContainers.includes(parentTag)) {
        console.log(`✘ List ${index + 1} (<${tagName}>) is not inside a valid container (found inside <${parentTag}>)`);
        allListsValid = false;
        allPassed = false;
      } else {
        console.log(`✔ List ${index + 1} (<${tagName}>) is properly placed inside <${parentTag}>`);
      }
    });
    if (allListsValid) {
      console.log('✔ All lists are valid and properly placed');
    }
  } else {
    console.log('✘ At least one <ul> or <ol> tag is required in <body>');
    allPassed = false;
  }

  // Table checks
  const tables = $('body table');
  if (tables.length > 0) {
    console.log(`✔ Found ${tables.length} <table> tag(s) in <body>`);
    let allTablesValid = true;
    tables.each((index, element) => {
      // Check for at least one <tr>
      const rows = $(element).find('tr');
      if (rows.length === 0) {
        console.log(`✘ Table ${index + 1} has no <tr> rows`);
        allTablesValid = false;
        allPassed = false;
      } else {
        console.log(`✔ Table ${index + 1} has ${rows.length} <tr> row(s)`);
        let allRowsValid = true;
        rows.each((rowIndex, row) => {
          // Check for at least one <td> or <th>
          const cells = $(row).find('td, th');
          if (cells.length === 0) {
            console.log(`✘ Table ${index + 1}, row ${rowIndex + 1} has no <td> or <th> cells`);
            allRowsValid = false;
            allTablesValid = false;
            allPassed = false;
          } else {
            console.log(`✔ Table ${index + 1}, row ${rowIndex + 1} has ${cells.length} cell(s)`);
            let allCellsValid = true;
            cells.each((cellIndex, cell) => {
              const text = $(cell).text().trim();
              const cellType = $(cell).prop('tagName').toLowerCase();
              if (text === '') {
                console.log(`✘ Table ${index + 1}, row ${rowIndex + 1}, cell ${cellIndex + 1} (<${cellType}>) is empty`);
                allCellsValid = false;
                allRowsValid = false;
                allTablesValid = false;
                allPassed = false;
              } else {
                console.log(`✔ Table ${index + 1}, row ${rowIndex + 1}, cell ${cellIndex + 1} (<${cellType}>) contains text: "${text}"`);
              }
            });
            if (allCellsValid) {
              console.log(`✔ Table ${index + 1}, row ${rowIndex + 1} has valid cells`);
            }
          }
        });
        if (allRowsValid) {
          console.log(`✔ Table ${index + 1} has valid rows`);
        }
      }
      // Check if table is inside valid container
      const parentTag = $(element).parent().prop('tagName').toLowerCase();
      const validContainers = ['body', 'div', 'section', 'article', 'header', 'footer'];
      if (!validContainers.includes(parentTag)) {
        console.log(`✘ Table ${index + 1} is not inside a valid container (found inside <${parentTag}>)`);
        allTablesValid = false;
        allPassed = false;
      } else {
        console.log(`✔ Table ${index + 1} is properly placed inside <${parentTag}>`);
      }
    });
    if (allTablesValid) {
      console.log('✔ All tables are valid and properly placed');
    }
  } else {
    console.log('✘ At least one <table> tag is required in <body>');
    allPassed = false;
  }

  // Form checks
  const forms = $('body form');
  if (forms.length > 0) {
    console.log(`✔ Found ${forms.length} <form> tag(s) in <body>`);
    let allFormsValid = true;
    forms.each((index, element) => {
      // Check for non-empty action attribute
      const action = $(element).attr('action');
      if (!action || action.trim() === '') {
        console.log(`✘ Form ${index + 1} has missing or empty action attribute`);
        allFormsValid = false;
        allPassed = false;
      } else {
        // Basic URL/path format check
        const urlPattern = /^(https?:\/\/|\/|[a-zA-Z0-9_-]+\.(php|html|asp|jsp))/i;
        if (!urlPattern.test(action)) {
          console.log(`✘ Form ${index + 1} has invalid action value: "${action}"`);
          allFormsValid = false;
          allPassed = false;
        } else {
          console.log(`✔ Form ${index + 1} has valid action: "${action}"`);
        }
      }
      // Check for at least one input element (<input>, <textarea>, or <select>)
      const inputs = $(element).find('input, textarea, select');
      if (inputs.length === 0) {
        console.log(`✘ Form ${index + 1} has no input elements (<input>, <textarea>, or <select>)`);
        allFormsValid = false;
        allPassed = false;
      } else {
        console.log(`✔ Form ${index + 1} has ${inputs.length} input element(s)`);
        let allInputsValid = true;
        inputs.each((inputIndex, input) => {
          const tagName = $(input).prop('tagName').toLowerCase();
          // For <input> and <textarea>, check for a name attribute
          if (tagName === 'input' || tagName === 'textarea') {
            const name = $(input).attr('name');
            if (!name || name.trim() === '') {
              console.log(`✘ Form ${index + 1}, input ${inputIndex + 1} (<${tagName}>) has missing or empty name attribute`);
              allInputsValid = false;
              allFormsValid = false;
              allPassed = false;
            } else {
              console.log(`✔ Form ${index + 1}, input ${inputIndex + 1} (<${tagName}>) has name: "${name}"`);
            }
          }
          // For <select>, check for at least one <option>
          if (tagName === 'select') {
            const options = $(input).find('option');
            if (options.length === 0) {
              console.log(`✘ Form ${index + 1}, input ${inputIndex + 1} (<${tagName}>) has no <option> elements`);
              allInputsValid = false;
              allFormsValid = false;
              allPassed = false;
            } else {
              console.log(`✔ Form ${index + 1}, input ${inputIndex + 1} (<${tagName}>) has ${options.length} <option> element(s)`);
            }
          }
        });
        if (allInputsValid) {
          console.log(`✔ Form ${index + 1} has valid input elements`);
        }
      }
      // Check if form is inside valid container
      const parentTag = $(element).parent().prop('tagName').toLowerCase();
      const validContainers = ['body', 'div', 'section', 'article', 'header', 'footer'];
      if (!validContainers.includes(parentTag)) {
        console.log(`✘ Form ${index + 1} is not inside a valid container (found inside <${parentTag}>)`);
        allFormsValid = false;
        allPassed = false;
      } else {
        console.log(`✔ Form ${index + 1} is properly placed inside <${parentTag}>`);
      }
    });
    if (allFormsValid) {
      console.log('✔ All forms are valid and properly placed');
    }
  } else {
    console.log('✘ At least one <form> tag is required in <body>');
    allPassed = false;
  }

  // Comment checks
  const commentRegex = /<!--[\s\S]*?-->/g;
  const comments = html.match(commentRegex) || [];
  if (comments.length > 0) {
    console.log(`✔ Found ${comments.length} HTML comment(s)`);
    let allCommentsValid = true;
    comments.forEach((comment, index) => {
      // Extract comment content (remove <!-- and -->)
      const content = comment.replace(/<!--/, '').replace(/-->/, '').trim();
      if (content === '') {
        console.log(`✘ Comment ${index + 1} is empty`);
        allCommentsValid = false;
        allPassed = false;
      } else {
        console.log(`✔ Comment ${index + 1} contains text: "${content}"`);
      }
    });
    if (allCommentsValid) {
      console.log('✔ All comments are valid');
    }
  } else {
    console.log('✘ At least one HTML comment is required');
    allPassed = false;
  }

  if (allPassed) {
    console.log('\n🎉 Success! All basic HTML structure, heading, paragraph, link, image, list, table, form, and comment elements are correct.');
  } else {
    console.log('\n❗ Structure, heading, paragraph, link, image, list, table, form, or comment check failed. Please review your HTML.');
  }

  return allPassed;
}

// Start execution timer
const startTime = process.hrtime();
const $ = cheerio.load(html);

// Run both verifications
const syntaxPassed = syntaxVerify();
const structurePassed = codeVerify($);
const allPassed = syntaxPassed && structurePassed;

// Execution metrics
const [sec, nanosec] = process.hrtime(startTime);
const executionTime = +(sec + nanosec / 1e9).toFixed(3);
const linesOfCode = html.split('\n').filter((line) => line.trim()).length;

// Read current attempts
let attempts = readAttempts();

// Save results only if all tests passed
if (allPassed) {
  const resultData = {
    attempts,
    linesOfCode,
    executionTime,
    
    timestamp: new Date().toISOString(),
  };

  try {
    fs.writeFileSync(resultFile, JSON.stringify(resultData, null, 2));
    console.log(`\n✅ All tests passed. Results saved to ${resultFile}.`);
  } catch (err) {
    console.error(`Failed to write to ${resultFile}: ${err.message}`);
  }
  process.exit(0);
} else {
  // Increment attempts if tests failed
  attempts += 1;
  writeAttempts(attempts);
  console.log(`\n❌ One or more tests failed. Attempt #${attempts} recorded.`);
  ;
}