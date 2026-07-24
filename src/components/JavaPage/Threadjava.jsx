import React from 'react'

const Threadjava = () => {
  return (
    <>
      <div className="p-6 ml-80">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-800">Threads in Java (Detailed Guide)</h1>

          <p className="mt-4 text-lg text-gray-700">
            A <strong>Thread</strong> in Java represents a path of execution. Java supports multithreading — the ability to run multiple threads in parallel. This is useful for tasks like animations, file downloads, processing user inputs, or handling real-time operations concurrently.
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">🔸 What is Multithreading?</h2>
          <p className="mt-2 text-lg text-gray-700">
            <strong>Multithreading</strong> is a core feature of Java that allows multiple threads to run concurrently. Each thread runs independently but shares the same memory space.
          </p>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
            <li>Improves CPU utilization</li>
            <li>Helps in writing responsive programs (e.g., GUI apps)</li>
            <li>Reduces time consumption</li>
          </ul>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">🔸 How to Create Threads in Java</h2>
          <p className="mt-2 text-lg text-gray-700">You can create threads in two main ways:</p>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
            <li>By extending the <code>Thread</code> class</li>
            <li>By implementing the <code>Runnable</code> interface</li>
          </ul>

          <h3 className="mt-4 text-xl font-semibold text-gray-800">1. Extending the Thread Class</h3>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-2 overflow-auto">
{`class MyThread extends Thread {
  public void run() {
    System.out.println("Thread is running...");
  }

  public static void main(String[] args) {
    MyThread t1 = new MyThread();
    t1.start(); // start() internally calls run()
  }
}`}
          </pre>

          <h3 className="mt-4 text-xl font-semibold text-gray-800">2. Implementing the Runnable Interface</h3>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-2 overflow-auto">
{`class MyRunnable implements Runnable {
  public void run() {
    System.out.println("Runnable thread running...");
  }

  public static void main(String[] args) {
    Thread t1 = new Thread(new MyRunnable());
    t1.start();
  }
}`}
          </pre>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">🔸 Thread Lifecycle</h2>
          <p className="mt-2 text-lg text-gray-700">A thread passes through the following states:</p>
          <ol className="list-decimal pl-6 mt-2 text-lg text-gray-700">
            <li><strong>New</strong> – Thread object is created but not started.</li>
            <li><strong>Runnable</strong> – start() has been called; thread is ready to run.</li>
            <li><strong>Running</strong> – Thread is currently executing.</li>
            <li><strong>Blocked/Waiting</strong> – Thread is inactive temporarily.</li>
            <li><strong>Terminated</strong> – Thread has finished execution.</li>
          </ol>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">🔸 Thread Control Methods</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 mt-2">
            <li><code>start()</code> – Starts the thread</li>
            <li><code>run()</code> – Contains the logic of thread</li>
            <li><code>sleep(ms)</code> – Pauses thread for a given time</li>
            <li><code>join()</code> – Waits for another thread to finish</li>
            <li><code>isAlive()</code> – Checks if thread is still active</li>
            <li><code>setPriority(int)</code> – Sets thread priority</li>
            <li><code>getPriority()</code> – Gets thread priority</li>
            <li><code>yield()</code> – Suggests that the current thread pauses for others</li>
          </ul>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">🔸 Example: Sleep and Join</h2>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-2 overflow-auto">
{`class Demo extends Thread {
  public void run() {
    for (int i = 1; i <= 5; i++) {
      try {
        Thread.sleep(500);  // Pauses for 500ms
      } catch (InterruptedException e) {
        System.out.println(e);
      }
      System.out.println(i);
    }
  }

  public static void main(String[] args) {
    Demo t1 = new Demo();
    Demo t2 = new Demo();

    t1.start();
    try {
      t1.join(); // t2 waits for t1 to finish
    } catch (InterruptedException e) {
      System.out.println(e);
    }

    t2.start();
  }
}`}
          </pre>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">🔸 Thread Synchronization</h2>
          <p className="mt-2 text-lg text-gray-700">
            When multiple threads access a shared resource, synchronization ensures that only one thread can access the resource at a time.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-2 overflow-auto">
{`class Table {
  synchronized void printTable(int n) {
    for (int i = 1; i <= 5; i++) {
      System.out.println(n * i);
      try {
        Thread.sleep(500);
      } catch (Exception e) {
        System.out.println(e);
      }
    }
  }
}

class MyThread1 extends Thread {
  Table t;
  MyThread1(Table t) {
    this.t = t;
  }
  public void run() {
    t.printTable(5);
  }
}

class MyThread2 extends Thread {
  Table t;
  MyThread2(Table t) {
    this.t = t;
  }
  public void run() {
    t.printTable(100);
  }
}

public class TestSynchronization {
  public static void main(String[] args) {
    Table obj = new Table();
    MyThread1 t1 = new MyThread1(obj);
    MyThread2 t2 = new MyThread2(obj);
    t1.start();
    t2.start();
  }
}`}
          </pre>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">🔸 Deadlock</h2>
          <p className="mt-2 text-lg text-gray-700">
            Deadlock occurs when two or more threads are blocked forever, each waiting on the other.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-2 overflow-auto">
{`class A {
  synchronized void methodA(B b) {
    System.out.println("Thread1 starts execution of methodA");
    try { Thread.sleep(1000); } catch (Exception e) {}
    b.last();
  }

  synchronized void last() {
    System.out.println("Inside A.last()");
  }
}

class B {
  synchronized void methodB(A a) {
    System.out.println("Thread2 starts execution of methodB");
    try { Thread.sleep(1000); } catch (Exception e) {}
    a.last();
  }

  synchronized void last() {
    System.out.println("Inside B.last()");
  }
}

public class DeadlockExample extends Thread {
  A a = new A();
  B b = new B();

  public void run() {
    b.methodB(a);
  }

  public static void main(String[] args) {
    DeadlockExample obj = new DeadlockExample();
    obj.start();
    obj.a.methodA(obj.b);
  }
}`}
          </pre>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">🔸 Inter-thread Communication</h2>
          <p className="mt-2 text-lg text-gray-700">
            Java provides methods like <code>wait()</code>, <code>notify()</code>, and <code>notifyAll()</code> for threads to communicate with each other.
          </p>
          <pre className="p-4 bg-gray-100 text-[#37474f] rounded-lg mt-2 overflow-auto">
{`class Customer {
  int amount = 10000;

  synchronized void withdraw(int amount) {
    System.out.println("Going to withdraw...");

    if (this.amount < amount) {
      System.out.println("Insufficient balance, waiting for deposit...");
      try { wait(); } catch (Exception e) {}
    }
    this.amount -= amount;
    System.out.println("Withdraw completed...");
  }

  synchronized void deposit(int amount) {
    System.out.println("Depositing amount...");
    this.amount += amount;
    System.out.println("Deposit completed...");
    notify();
  }
}

public class Test {
  public static void main(String[] args) {
    Customer c = new Customer();
    new Thread(() -> c.withdraw(15000)).start();
    new Thread(() -> c.deposit(10000)).start();
  }
}`}
          </pre>

          <h2 className="mt-6 text-2xl font-semibold text-gray-800">✅ Conclusion</h2>
          <p className="mt-2 text-lg text-gray-700">
            Threads are vital for concurrent execution and better performance. Proper handling of threads—creation, synchronization, communication—makes programs faster and more efficient. Always handle thread safety using synchronization and avoid common pitfalls like deadlock.
          </p>
        </div>
      </div>
    </>
  )
}

export default Threadjava
