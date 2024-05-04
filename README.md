# json-data-toolkit

A simple utility library for filtering and aggregating JSON data arrays in JavaScript. This package provides easy-to-use functions to help developers manage and analyze data efficiently in their applications.

## Features

- **Filter Data**: Filter an array of objects based on matching properties.
- **Aggregate Data**: Sum up numerical properties of objects in an array, grouped by a specified key.

## Installation

Install `json-data-toolkit` via npm:

```bash
npm install json-data-toolkit
```

## Usage

Importing the module:
```javascript   
const { filterData, aggregateData } = require('json-data-toolkit');
```

## Filtering Data

To filter data based on properties, you can use the filterData function:

```javascript   
const data = [
  { name: "Alice", age: 25, occupation: "Engineer" },
  { name: "Bob", age: 30, occupation: "Designer" },
  { name: "Alice", age: 28, occupation: "Designer" }
];

const filtered = filterData(data, { name: "Alice" });
console.log(filtered);
// Output: [{ name: "Alice", age: 25, occupation: "Engineer" }, { name: "Alice", age: 28, occupation: "Designer" }]
```

## Aggregating Data

To aggregate data by a property and sum another property, use the aggregateData function:

```javascript   
const employees = [
  { department: "Sales", salary: 1000 },
  { department: "Engineering", salary: 2000 },
  { department: "Sales", salary: 1500 }
];

const aggregated = aggregateData(employees, "department", "salary");
console.log(aggregated);
// Output: [{ key: "Sales", sum: 2500 }, { key: "Engineering", sum: 2000 }]
```

## Contributing

Contributions are always welcome! Please fork the repository and submit a pull request with your new features or fixes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.