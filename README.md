# Delivery Path Checker

A lightweight React web app to validate whether a delivery path respects pickup-before-dropoff rules.

---

## Overview

This tool helps verify delivery paths based on a list of delivery jobs. Each delivery job has a pickup and dropoff address. The app checks whether the path (a list of address visits) follows the correct delivery sequence: **every pickup must happen before its corresponding dropoff**.

---

## Features

-  Validates delivery paths against delivery job rules
-  Detailed step-by-step output (pickup, dropoff, no action)
-  Detects and explains invalid paths

---

## Example

### Input

- **Deliveries**:  
  `[[1, 2], [3, 4]]`

- **Path**:  
  `[1, 2, 3, 4]`

### Output

| # | Address | Action   |
|---|---------|----------|
| 1 | 1       | Pickup   |
| 2 | 2       | Dropoff  |
| 3 | 3       | Pickup   |
| 4 | 4       | Dropoff  |

Success: The path is valid.

---

## Project Structure

This project includes both:

Algorithmic logic — The core delivery path checking algorithm, implemented in a separate module (checkDeliveryPath.js), designed to be testable independently.
UI Interface — A React-based user interface that allows you to input delivery data and paths, run the algorithm directly in the browser, and view results interactively.

## Built With

- **React v19** 
- **Vite** 
- **CSS3** 

---

## How to Use

1. Clone the repo:

   ```bash
   git clone https://github.com/NinaNMk/delivery-path-checker.git
   cd delivery-path-checker
   npm install
   npm run dev

