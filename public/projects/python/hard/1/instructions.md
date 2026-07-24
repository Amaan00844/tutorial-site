# Python Async Programming

## 🎯 Task Description

Create a Python program that demonstrates asynchronous programming using asyncio.

## 📋 Requirements

1. Implement the following async functions:

   - `fetch_data`: Simulate fetching data asynchronously
   - `process_data`: Process the fetched data asynchronously
   - `save_data`: Save the processed data asynchronously
   - `main`: Orchestrate all async operations

2. Your implementation should:

   - Use proper async/await syntax
   - Create and manage concurrent tasks
   - Use async context managers
   - Implement proper error handling

3. Include handling for:
   - Network delays (simulated)
   - Processing errors
   - Resource cleanup

## 🚀 Example Structure

```python
import asyncio

async def fetch_data():
    await asyncio.sleep(1)  # Simulate network delay
    return {"data": "example"}

async def process_data():
    data = await fetch_data()
    await asyncio.sleep(0.5)  # Simulate processing
    return f"Processed: {data}"

async def save_data():
    async with asyncio.Lock():  # Using async context manager
        await asyncio.sleep(0.5)  # Simulate saving
        return "Data saved"

async def main():
    try:
        task1 = asyncio.create_task(fetch_data())
        task2 = asyncio.create_task(process_data())
        task3 = asyncio.create_task(save_data())

        results = await asyncio.gather(task1, task2, task3)
        return results
    except Exception as e:
        print(f"Error: {str(e)}")

# Run the program
if __name__ == "__main__":
    asyncio.run(main())
```

## 🧪 Testing Criteria

Your code will be tested for:

- Proper use of async/await syntax
- Concurrent task handling
- Error handling implementation
- Use of async context managers
- Overall program flow

## 💡 Tips

- Use asyncio.sleep() to simulate time-consuming operations
- Implement proper error handling for each async function
- Use async context managers when appropriate
- Test your code with different scenarios
