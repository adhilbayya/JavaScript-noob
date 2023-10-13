let meeting = {
  attendees : [],
  add(attendee){
    console.log(`${attendee} has joined the meeting`);
    this.attendees.push(attendee);
    return this;
  },
  get latest(){
    let count = this.attendees.length;
    return count == 0 ? undefined : this.attendees[count - 1];
  }
};

meeting.add('Adhil').add('Raju').add('Richu');
console.log(`${meeting.latest} is the latest attendee`);
