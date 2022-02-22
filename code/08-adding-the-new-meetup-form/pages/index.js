import MeetupList from '../components/meetups/MeetupList';
import {useEffect, useState} from 'react'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!'
  }
];

function HomePage(props) {
  // const [meetups, setMeetups] = useState([])
  // useEffect(() => {
  //   setMeetups(DUMMY_MEETUPS)
  // }, [])


  return <MeetupList meetups={props.meetups} />
}

// will never run in client, run before component rendring, 
// when build it will generate!
export async function getStaticProps() {
  // fetch data from an API
  console.log("run getStaticProps()")
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10   // server will run every 1 second if there is rq
  }; 
}


export default HomePage;