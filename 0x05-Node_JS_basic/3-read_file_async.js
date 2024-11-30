const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const lines = data.split('\n');

    const students = lines.filter((line) => line.trim() !== '').slice(1);

    if (students.length === 0) {
      return 'Number of students: 0';
    }

    let result = `Number of students: ${students.length}\n`;

    const fields = {};

    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
    }

    return result.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
