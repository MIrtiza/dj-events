import { useRouter } from 'next/router'

export const EventPage = () => {
    const router = useRouter()
    console.log(router)
  return <div>
      Event Detail page
      <h3> {router.query.slug} </h3>
      <button onClick={()=> router.push('/')}>home router</button>
  </div>;
};



export default EventPage