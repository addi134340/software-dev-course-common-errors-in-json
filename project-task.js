/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

{"hotelBooking":
  {
    "hotelName": "Grand City Hotel",
    "checkInDate": "2024-05-15",   
    "checkOutDate": "2024-05-20",
    "guests": [
      {
        "name": "Alice Johnson",
        "age": 30,
        "email": "alice.johnson@example.com"
      },
      {
        "name": "Bob Smith",
        "age": null,
        "email": "bob.smith@example"
      }
    ],
    "roomDetails": {
      "type": "Suite",
      "pricePerNight": 200,
      "amenities": ["WiFi", "Breakfast", "Parking"]
    }
  }
}
;

//Explinations

//Line 47, I'm not sure there is supposed to be a const so I took that away.
//Line 50, added a comma after the date.
//Line 54, put double quotes around name. 
//Line 60, changed the age from undefined to null.
//Line 67, removed the comma after "Parking".

// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
//I read over the code and identified the errors. The I used the above linter to ensure my code was correct.

2️⃣ How did you confirm that your corrected JSON file was valid?
//I used the linter above.

3️⃣ Which errors were the most difficult to spot? Why?
//The most difficult error to spot was the final one, I just kind of looked over it.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
*/
//Strategies that can help would be to reread and use linters.
