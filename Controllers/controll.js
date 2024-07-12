const Contact = require("../controllSec/contactModel")


const getContacts = async (req, res) => {
  const contacts = await Contact.find({ user_id:req.user.id })
  res.status(200).json({ message: "done", data: contacts })
}

//const creatContact = async (req, res) => {
 // console.log("the request body is", req.body)
  //const { name, phone, email } = req.body
 // if (!name || !phone || !email) {
 //   res.status(400)
  //  throw new Error("filed is empty")
 // }
//  const contact = await Contact.create({
 //   name, email, phone, user_id : req.user.id
 // })
 // res.status(201).json({ message: "done", data: contact })
 // console.log(contact)
//}
const creatContact = async (req, res) => {
  console.log("the request body is", req.body);
  const { name, phone, email } = req.body;
  if (!name || !phone || !email) {
    res.status(400);
    throw new Error("filed is empty");
  }
  const contact = await Contact.create({
    name, email, phone, user_id: req.user.id
  });
  res.status(201).json({ message: "done", data: contact });
  console.log(contact);
};
const getContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if (!contact) {
    res.status(400)
    throw new Error("filed is empty")
  }
  res.status(200).json({ message: "get contact for", data: contact })
}
const updateContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if (contact.user_id && contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("user dont have permission");
  }
  await Contact.findByIdAndUpdate(req.params.id, req.body)
  res.status(200).json({ message: "update contact ", data: [] })
}
const deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id, req.body)
  res.status(200).json({ message: `delete contact for ${req.params.id}` })
}
module.exports = { getContacts, creatContact, getContact, updateContact, deleteContact }