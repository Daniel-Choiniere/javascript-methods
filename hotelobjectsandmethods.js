var hotel = {
    name: "CareerDevs Hotel",
    rating: 5.0,
    numberOfRooms: 5,
    roomRate: 325.00,
    roomNumbersAvailable: ["102", "103", "104", "105", "106"],
    roomNumbersBooked: ["101"],
    roomType: "Queen",
    
    numberOfRoomsAvailable: function() {
        return this.roomNumbersAvailable.length;
    },
    
    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length;
    }
    
    numberOfRooms: function() {
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },
    
};


