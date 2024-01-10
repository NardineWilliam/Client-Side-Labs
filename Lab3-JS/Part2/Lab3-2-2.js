var contacts = [];

while(true)
{
    var operation = prompt(`Enter the name of one of the following operations:\nadd\nsearch\nexit`);
    if (operation.toLowerCase() === 'exit')
    {
        alert("Exiting the phone book");
        break;
    }
    else
    {
        switch(operation.toLowerCase())
        {
            case 'add':
                var name=prompt("Enter the name of the contact");
                var phone=prompt("Enter the phone number");
                var contact=
                {
                    contactName: name,
                    phoneNumber: phone
                };
                contacts.push(contact);
                alert("Contact added succefully!");
            break;

            case 'search':
                var searchInput = prompt("Enter the name or phone number you want to search for");
               // var foundContacts = [];
                var foundContact = contacts.find(function(contact) 
                {
                    return (contact.contactName.toLowerCase() == (searchInput.toLowerCase()) || contact.phoneNumber == searchInput);
                }
                );
            
                  if (foundContact) {
                    alert(`Found contact:\nName: ${foundContact.contactName}\nPhone Number: ${foundContact.phoneNumber}`);
                  } else {
                    alert("Contact not found");
                  }
            break;    
        }
    }
}


