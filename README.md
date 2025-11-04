
# CPU Scheduling Visualizer 🖥️⚡

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://cpu-scheduling-visualizer-ribhav.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-13+-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue)](https://tailwindcss.com/)

> **A free, interactive web app that helps you learn and visualize how computers schedule tasks!**  
> Perfect for students learning Operating Systems, preparing for exams, or anyone curious about how CPUs manage multiple programs.

---

## 🌟 What is This?

Ever wondered how your computer decides which program to run when you have multiple apps open? This tool shows you exactly how different **CPU scheduling algorithms** work through interactive animations and visual charts!

**No installation required** - just open in your browser and start learning! 🎓

---

## 🎯 What Can You Do?

### **📚 Learn 6 Different Scheduling Algorithms**

1. **FCFS (First-Come, First-Served)**  
   - Like a queue at a coffee shop - whoever arrives first gets served first
   - Simple but not always the fastest

2. **SJF Non-Preemptive (Shortest Job First)**  
   - Shortest tasks go first
   - Once a task starts, it runs until completion

3. **SJF Preemptive (SRTF - Shortest Remaining Time First)**  
   - Always runs the task with the least time remaining
   - Can pause one task to start a shorter one

4. **Priority Non-Preemptive**  
   - Higher priority tasks go first
   - Like VIP service - important tasks skip the line

5. **Priority Preemptive**  
   - Same as above, but can pause lower priority tasks
   - When a VIP arrives, current customer steps aside

6. **Round Robin**  
   - Everyone gets a fair turn for a fixed time
   - Like taking turns on a swing - everyone gets equal time!

### **🎨 Visual Learning Features**

- ✨ **Interactive Gantt Charts** - See exactly when each process runs
- 📊 **Real-Time Calculations** - Instant feedback on performance metrics
- 🔢 **Process Management** - Add your own processes with custom values
- 📈 **Algorithm Comparison** - Compare different algorithms side-by-side
- 📄 **Export Results** - Download your results as a PDF report
- 💬 **Feedback Form** - Send suggestions directly to the developers

### **🎓 Why Use This Tool?**

- ✅ **Free & No Login Required** - Just open and start learning
- ✅ **Beginner Friendly** - Clear explanations and intuitive interface
- ✅ **Exam Prep** - Perfect for OS course homework and exam preparation
- ✅ **Visual Learning** - Understand concepts faster with animations
- ✅ **Practice Problems** - Try different scenarios and see results instantly
- ✅ **Mobile Friendly** - Works on phones, tablets, and computers

---

## 🚀 Quick Start

### **Option 1: Use Online (Easiest!)**

**Just click here:** [**CPU Scheduling Visualizer →**](https://cpu-scheduling-visualizer-ribhav.vercel.app/)

No installation needed! Works on any device with a web browser.

---

### **Option 2: Run on Your Computer**

#### **What You Need:**
- A computer with Node.js installed ([Download Node.js here](https://nodejs.org/))
- Basic familiarity with terminal/command prompt

#### **Step-by-Step Instructions:**

**1️⃣ Download the Code**
```bash
# Copy the project to your computer
git clone https://github.com/Ribhav-Singla/CPU-Scheduling-Visualizer.git

# Go into the project folder
cd CPU-Scheduling-Visualizer
```

**2️⃣ Install Dependencies**
```bash
# Download all required packages (takes 1-2 minutes)
npm install
```

**3️⃣ Start the Application**
```bash
# Start the development server
npm run dev
```

**4️⃣ Open in Browser**
```
Open your web browser and go to:
http://localhost:3000
```

🎉 **That's it!** The app is now running on your computer!

---

### **Option 3: Run with Docker** 🐳

If you prefer using Docker (a tool for running applications in containers):

```bash
# 1. Download the code
git clone https://github.com/Ribhav-Singla/CPU-Scheduling-Visualizer.git
cd CPU-Scheduling-Visualizer

# 2. Build the Docker image
docker build -t cpu-scheduler-visualizer .

# 3. Run the container
docker run -p 3000:3000 cpu-scheduler-visualizer

# 4. Open http://localhost:3000 in your browser
```

---

## 📖 How to Use

### **Step 1: Choose an Algorithm**
Select from the dropdown which scheduling algorithm you want to learn about.

### **Step 2: Add Processes**
- Click "Add Process" to create tasks
- Enter **Arrival Time** (when the task arrives)
- Enter **Burst Time** (how long it takes to complete)
- For priority algorithms, enter **Priority** (higher number = more important)

### **Step 3: Run Simulation**
Click **Submit** to see the magic happen! Watch as:
- The Gantt chart shows when each process runs
- Performance metrics are calculated automatically
- Results table shows completion time, waiting time, and turnaround time

### **Step 4: Compare Algorithms**
Click **"Compare similar algorithms"** to see how different scheduling methods perform with the same processes!

### **Step 5: Export Results**
Click **"Export results"** to download a PDF with all your charts and calculations.

---

## 💡 Tips for Students

- 🎯 **Start Simple**: Begin with FCFS - it's the easiest to understand
- 📝 **Take Notes**: Try the same processes with different algorithms
- 🔄 **Experiment**: Change arrival times and burst times to see different results
- 📊 **Compare**: Use the comparison feature to see which algorithm is most efficient
- 💾 **Save Your Work**: Export results as PDFs for your homework or study notes

---

## 🤝 Want to Contribute?

We love contributions from the community! Here's how you can help:

### **For Beginners:**
1. **Report Bugs** - Found something not working? Let us know!
2. **Suggest Features** - Have an idea? Use the feedback form on the website
3. **Share** - Tell your classmates and friends about this tool

### **For Developers:**
1. **Fork** the repository (make your own copy)
2. **Create a branch** for your changes
   ```bash
   git checkout -b my-new-feature
   ```
3. **Make your changes** and test them
4. **Commit** your changes
   ```bash
   git commit -m "Added a cool new feature"
   ```
5. **Push** to your fork
   ```bash
   git push origin my-new-feature
   ```
6. **Open a Pull Request** - We'll review and merge it!

---

## 📧 Need Help?

- 🐛 **Found a bug?** Open an [issue on GitHub](https://github.com/Ribhav-Singla/CPU-Scheduling-Visualizer/issues)
- 💬 **Have questions?** Use the feedback form on the website
- 📚 **Want to learn more?** Check out Operating Systems textbooks or online courses

---

## 🎓 Learning Resources

Want to dive deeper into CPU scheduling? Check out:
- **Operating System Concepts** by Silberschein (textbook)
- **MIT OpenCourseWare** - Free OS lectures
- **GeeksforGeeks** - CPU Scheduling tutorials
- **YouTube** - Search "CPU scheduling algorithms explained"

---

## 📄 License

This project is free to use and modify. Share it, improve it, learn from it!

---

## 🌟 Show Your Support

If this tool helped you:
- ⭐ **Star this repository** on GitHub
- 📢 **Share** with your classmates
- 💬 **Leave feedback** on the website
- 🤝 **Contribute** improvements

---

**Happy Learning! 🎉**

Made with ❤️ for students learning Operating Systems
