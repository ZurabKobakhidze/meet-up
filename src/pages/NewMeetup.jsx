import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  function addMeetuphandler(meetupData) {
    fetch(
      "https://react-getting-started-fab10-default-rtdb.firebaseio.com/meetups.json",
      {
        method:  'Post' , 
        body: JSON.stringify(meetupData),
        headers: {
          'content-Type' : 'application/json'
        }
      }
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetuphandler} />
    </section>
  );
}

export default NewMeetUpPage;
