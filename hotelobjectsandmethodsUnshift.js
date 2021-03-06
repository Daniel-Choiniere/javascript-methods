var hotel = {
    name: "CareerDevs Hotel",
    rating: 5.0,
    numberOfRooms: 5,
    roomRate: 325.00,
    roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],
    roomNumbersBooked: [],
    roomType: "Queen",
    
    numberOfRoomsAvailable: function() {
        // length of the number of rooms available, returned as an integer (1,5,20, etc)
        return this.roomNumbersAvailable.length;
    },
    
    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length;
    },

    numberOfRooms: function() {
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },
    
    // method to book a random room
    
    bookRoom: function() {
        if (this.numberOfRoomsAvailable() > 0) {
            // select a random avaliable room
            var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random() * this.roomNumbersAvailable.length)];
            this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)[0]);
            // this.roomNumbersBooked.unshift(randomRoom);
        } else {
        console.log("Sorry, we are fully booked.");
        }
    },
    
    // method to check out a random (already booked) room
    checkoutRoom: function() {
        if (this.roomNumbersBooked.length > 0) {
            var randomRoomCheckout = this.roomNumbersBooked[Math.floor(Math.random() * this.roomNumbersBooked.length)];
            this.roomNumbersAvailable.unshift(this.roomNumbersBooked.splice(this.roomNumbersBooked.indexOf(randomRoomCheckout), 1)[0]);
        } else {
        console.log("There are currently no rooms booked")
        }
    }
};

//  get program working with .push, .concat, .unshift