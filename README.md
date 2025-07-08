
# CPU Scheduling Visualizer 🖥️⚡

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://cpu-scheduling-visualizer-ribhav.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-13+-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue)](https://tailwindcss.com/)

An **interactive educational tool** for learning and visualizing CPU scheduling algorithms. Perfect for computer science students, educators, and anyone studying operating systems concepts.

## 🎯 Features

### **6 CPU Scheduling Algorithms**
- **FCFS (First-Come, First-Served)** - Simple queue-based scheduling
- **SJF Non-Preemptive** - Shortest job first without interruption  
- **SJF Preemptive (SRTF)** - Shortest remaining time first with preemption
- **Priority Non-Preemptive** - Priority-based without interruption
- **Priority Preemptive** - Priority-based with preemption
- **Round Robin** - Time-slice based circular scheduling

### **Interactive Visualizations**
- 📊 **Real-time Gantt Charts** - Visual timeline of process execution
- 📈 **Performance Metrics** - Completion time, turnaround time, waiting time
- ⚡ **Instant Calculations** - Average waiting time and turnaround time
- 🎮 **Interactive Input** - Add, edit, and remove processes dynamically

### **Educational Benefits**
- 🎓 Perfect for **Operating Systems courses**
- 📚 Helps understand **algorithm complexity and efficiency**
- 🔍 **Compare different scheduling strategies** side-by-side
- 💡 Visual learning for better **concept retention**

## 🚀 Live Demo

**[Try the CPU Scheduling Visualizer →](https://cpu-scheduling-visualizer-ribhav.vercel.app/)**  
## ⚡ Installation

### 🔧 Prerequisites:
- Node.js
- Docker installed (optional, if using Docker)

### 📌 Steps (Without Docker):
```sh
# Clone the repository
git clone https://github.com/Ribhav-Singla/CPU-Scheduling-Visualizer.git
cd CPU-Scheduling-Visualizer

# Install the dependencies
npm install

# Run the application
npm start

# Use the application
Open **http://localhost:3000** in your browser 🚀 
```


### 🐳 Steps (Using Docker):
```sh
# Clone the repository
git clone https://github.com/Ribhav-Singla/CPU-Scheduling-Visualizer.git
cd CPU-Scheduling-Visualizer

# Build the Docker image
docker build -t cpu-scheduler-visualizer .

# Run the container
docker run -p 3000:3000 cpu-scheduler-visualizer

# Use the application
Open **http://localhost:3000** in your browser 🚀
```

## 🤝 Contributing
Contributions are welcome! Follow these steps:

    1. Fork the repository
    2. Create a new branch (`git checkout -b feature-branch`)
    3. Commit your changes (`git commit -m "Added a new feature"`)
    4. Push to your branch (`git push origin feature-branch`)
    5. Open a Pull Request
