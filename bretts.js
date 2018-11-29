var Library = {
    name: "Truth-Brary",
    books: ["amelia bedilia", "the amber spyglass","fear", "step brothers:the novelization", "coding for dummies"],
    checkedout:[],
    booksavail: function (){
        for (let i=0; i<this.books.length; i++){
        var CaseBooks = this.books[i].charAt(0).toUpperCase()+this.books[i].slice(1);
        console.log(CaseBooks)
        }
    },
    checkoutbook: function(requestedbook){
        if (this.books.length<0){
            console.log("Little Town of Footloose")
        }
        else {
            var rqbook=requestedbook.toLowerCase();
            for (let i=0; i<this.books.length; i++){
                if (rqbook==this.books[i]){
                    this.checkedout = this.checkedout.concat(this.books.splice(i,1));
                    console.log(this.checkedout)
                    return
                }
                else
                    console.log("We do not have that book in our Library")
            }
        }
    },
    checkinbook: function(bookcheckin){
        if (this.checkedout.length<0){
            console.log("That book is not checked out")
            console.log("You have " this.checkedout " checkedout.")
        }
        else {
            var bookchkin=this.bookcheckin.toLowerCase();
            console.log(bookchkin);
        }
    }
}