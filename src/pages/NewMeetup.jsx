import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
function addMeetuphandler(meetupData) {
  
}

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetuphandler}/>
    </section>
  );
}

export default NewMeetUpPage;
