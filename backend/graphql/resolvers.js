const product = require('../model/product')
const shop = require('../model/shop')
const code = require('../model/coupounCode')
const event = require('../model/event')
const user = require('../model/user')
const order = require('../model/order')
const conversation = require('../model/conversation')
const messages = require('../model/messages')


module.exports = {
    Query: {
        async products() {
            return await product.find()
        },
        async product(_, { id }) {
            return await product.findById(id)
        },
        async shops(_, { id }) {
            return await shop.findById(id)
        },
        async codes(){
            return await code.find()
        },
        async code(_, { id }) {
            return await code.findById(id)
        },
        async events() {
            return await event.find()
        },
        async event(_, { id }) {
            return await event.findById(id)
        },
        async users(){
            return await user.find()
        },
        async user(_, { id}) {
            return await user.findById(id)
        },
        async orders(){
            return await order.find()
        },
        async order(_, { id}) {
            return await order.findById(id)
        },
        async conversations(){
            return await conversation.find()
        },
        async conversation(_, { id }) {
            return await conversation.findById(id)
        },
        async messages(){
            return await messages.find()
        },
       
    },
    Product: {
        async shops(parant) {
            return await shop.findById(parant.shopId)
        }
    },
    Shops: {
        async product(parant) {
            return await product.find(product.shopId, parant.id)
        },
        async event(parant) {
            return await event.find(event.shopId, parant.id)
        }

    },
    Event:{
        async shops(parant) {
            return await shop.findById(parant.shopId)
        }
    },
    Mutation: {
        async deleteProduct(_, { id }) {

            const wasDeleted= (await product.deleteOne({ _id: id })).deletedCount
            return wasDeleted
        },
        async updateProduct(_, { id, productsinput: {name,description } }) {
            const newProduct = (await product.updateOne({ _id: id }, {name:name,description: description })).modifiedCount
            return newProduct
        },
        async addCupon(_,{addinput:{name,value,shopId}}) {
            const newCupon = new code({
                name: name,
                value: value,
                shopId: shopId
            })
           const novo = await newCupon.save()
           return {
            ...novo._doc
           }
        },
        async deleteCupon(_, { id }){
            const wasDeleted  = (await code.deleteOne({ _id: id})).deletedCount
            return wasDeleted
        },
        async updateCupon(_,{id,cuponinput:{name,value}}){
            const newCupon = (await code.updateOne({_id:id},{name:name,value:value})).modifiedCount
            return newCupon
        },
        async deleteEvent(_, { id }) {
            const wasDeleted = (await event.deleteOne({ _id: id})).deletedCount
            return wasDeleted
        },
        async updateEvent(_,{id,eventinput:{name,description,category,status,tags}}){
            const newEvent = (await event.updateOne({_id:id},{name:name,description:description,category:category,status:status,tags:tags})).modifiedCount
            return newEvent
        },
        async deleteUser(_, { id }) {
            const wasDeleted = (await user.deleteOne({ _id: id})).deletedCount
            return wasDeleted
        },
        async updateUser(_,{id,userinput:{name,email,role}}){
            const newEvent = (await user.updateOne({_id:id},{name:name,email:email,role:role})).modifiedCount
            return newEvent
        },
        async deleteOrder(_, { id }) {
            const wasDeleted = (await order.deleteOne({ _id: id})).deletedCount
            return wasDeleted
        },
        async updateOrder(_,{id,orderinput:{totalPrice,status}}){
            const newEvent = (await order.updateOne({_id:id},{totalPrice:totalPrice,status:status})).modifiedCount
            return newEvent
        },
        async deleteConversation(_, { id }) {
            const wasDeleted = (await conversation.deleteOne({ _id: id})).deletedCount
            return wasDeleted
        },
        async updateOrder(_,{id,conversationinput:{members}}){
            const newEvent = (await conversation.updateOne({_id:id},{members:members})).modifiedCount
            return newEvent
        },
        async deleteMessage(_, { id }) {
            const wasDeleted = (await messages.deleteOne({_id:id})).deletedCount
            return wasDeleted
        },
        
    }
}