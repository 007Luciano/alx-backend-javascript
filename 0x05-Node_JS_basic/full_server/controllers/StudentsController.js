const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const databasePath = process.argv[2];
    try {
      const students = await readDatabase(databasePath);
      let responseText = 'This is the list of our students\n';

      const fields = Object.keys(students).sort();
      fields.forEach((field) => {
        responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databasePath = process.argv[2];
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const students = await readDatabase(databasePath);
      const list = students[major] ? students[major].join(', ') : '';
      res.status(200).send(`List: ${list}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
