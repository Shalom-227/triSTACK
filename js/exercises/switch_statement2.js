/* This program is a mini contact manager.
- shows the first contact in the list if the user selects option 1,
- allows you add a new contact by entering a name, phone number, and email address.If the user selects option 2.
- - shows the last contact if the user selects option 3,
*/

//creates a Array of contacts
let contacts = [
	{
	name: "Maxwell Wright",
	phone: "(0191) 719 6495",
	email: "Curabitur.egestas.nunc@nonummyac.co.uk"
},
	{
		name: "Raja Villarreal",
		phone: "0866 398 2895",
		email: "posuere.vulputate@sed.com"
	},
	{
		name: "Helen Richards",
		phone: "0800 1111",
		email: "libero@convallis.edu"
	}
];
let choices = prompt(`Select an option: \n 1- to show first contact\n 2- add new contact\n 3- to show last contact`);  //prompts user to select option
let outcome;

switch (choices) {
	case "1":
		//display first contact
		outcome =`${contacts[0].name}, ${contacts[0].phone}, ${contacts[0].email}`;
		break;
	case "2":
		//add new contact
		let name = prompt("Enter name: ");
		let phone = prompt("Enter phone: ");
		let email = prompt("Enter email: ");

		let contact = {
			name: name,
			phone: phone,
			email: email
		};
		if (contact.name && contact.phone && contact.email){
			contacts.push(contact);
                	alert("Contact added successfully!");
		}else {
			outcome = "Missing at least one value";
		}
		break;
        case "3": // display last contact
		lastContact = contacts[contacts.length - 1];
		outcome = `${lastContact.name}, ${lastContact.phone}, ${lastContact.email}`;
		break;
	default:
		alert("Error: Unknown option");
    }
console.log(outcome);

