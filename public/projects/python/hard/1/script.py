# Async Programming Example

import asyncio

async def fetch_data():
    """Simulate fetching data from a source."""
    try:
        await asyncio.sleep(1)  # Simulate network delay
        return {"data": "example"}
    except Exception as e:
        raise ValueError(f"Error fetching data: {str(e)}")

async def process_data():
    """Process the fetched data asynchronously."""
    try:
        data = await fetch_data()
        await asyncio.sleep(0.5)  # Simulate processing
        return f"Processed: {data}"
    except Exception as e:
        raise ValueError(f"Error processing data: {str(e)}")

async def save_data():
    """Save the processed data asynchronously."""
    try:
        async with asyncio.Lock():  # Using async context manager
            await asyncio.sleep(0.5)  # Simulate saving
            return "Data saved"
    except Exception as e:
        raise ValueError(f"Error saving data: {str(e)}")

async def main():
    """Main async function to orchestrate the operations."""
    try:
        # Create tasks
        task1 = asyncio.create_task(fetch_data())
        task2 = asyncio.create_task(process_data())
        task3 = asyncio.create_task(save_data())
        
        # Execute tasks concurrently
        results = await asyncio.gather(task1, task2, task3)
        return results
    except Exception as e:
        print(f"Error in main: {str(e)}")
        return None

# Run the async program
if __name__ == "__main__":
    asyncio.run(main())
