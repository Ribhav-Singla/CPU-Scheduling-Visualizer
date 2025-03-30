
# CPU Scheduling Visualizer

A visual tool to simulate 6+ CPU scheduling algorithms, including FCFS, SJF (Preemptive & Non-preemptive), Priority Scheduling (Preemptive & Non-preemptive), and Round Robin. It features an interactive Gantt Chart for process execution visualization and a graph comparing the average waiting and turnaround times of each algorithm.

## 📖 Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
## 🎯 Features

✅ **6+ CPU Scheduling Algorithms** - Visualize various CPU scheduling techniques.  
✅ **Interactive UI & UX** - Engaging and user-friendly interface for better understanding.  
✅ **Dynamic Gantt Chart with Animation** - See process execution with smooth animations.  
✅ **Performance Comparison Graph** - Compare the average waiting and turnaround time of different algorithms visually.  
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
