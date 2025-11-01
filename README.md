# 👨‍💼 Employee Profile Viewer App

  - A React-based web app that displays employee profiles dynamically.
It lets you view employee details in a clean, card-style layout with reusable components and interactive popups.

# 🚀 Features

  - Displays employee profiles using reusable ProfileCard components.
  - Fetches data from a local JSON file using the Fetch API.
  - Uses useState and useEffect hooks to manage and update data dynamically.
  - Allows users to view detailed employee info in a modal view.
  - Fully responsive layout with hover animations and smooth scaling effects.

# 🧠 How It Works

## Data Fetching:
  - The app fetches employee data from a custom data file using fetch() inside useEffect.
## State Management:
  - The useState hook stores employee data and modal visibility state.
## Component Reusability:
  - The ProfileCard component is reused for each employee profile, keeping the code modular and clean.
## Popup Modal:
  - When “View Profile” is clicked, a modal displays detailed information about the selected employee.

  - Fetch Code Snippet
```
useEffect(() => {
  fetch('/data/employees.json')
    .then(response => response.json())
    .then(data => setEmployees(data));
}, []);
```
