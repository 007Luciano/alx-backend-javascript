const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n');

    const students = lines.filter((line) => line.trim() !== '').slice(1);

    if (students.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    for (const field in fields) {
      if (fields.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
