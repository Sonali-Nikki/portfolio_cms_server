import Contact from "../models/Contact.js";

export const getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateContact = async (req, res) => {
  try {
    const { email, phone, address } = req.body;

    let contact = await Contact.findOne();
    if (!contact) contact = new Contact();

    contact.email = email;
    contact.phone = phone;
    contact.address = address;

    await contact.save();

    res.json({ message: "Contact updated", contact });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
