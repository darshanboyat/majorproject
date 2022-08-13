import React, { useEffect, useRef } from "react";
import call from './Assets/Call.mp4'
import mail from './Assets/Mail.mp4'
import whatsapp from './Assets/whatsapp.mp4'

export default function Contact() {
  const videoEl = useRef(1000);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
    };
    useEffect(() => {
      attemptPlay();
    }, []);
  return (
    <>
      <div id='Contact' className="contact end-section">
      <h1 className='category-caption contact-adjust'>Contact Us</h1>
      <div className="underline"></div>
        <div className="row g-3 contact-vid">
          <div className="col-md-4">
            <a href="tel: +91 8888888888">
              <video src={call} autoPlay="" loop="" width="240px" type="video/mp4" ref={videoEl}/>
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://chat.whatsapp.com/Lf9PGyl7hQAGthYZyh686i" className="whatsapp">
              <video src={whatsapp} autoPlay="" loop="" width="240px" ref={videoEl}/>
            </a>
          </div>
          <div className="col-md-4">
            <video src={mail} autoPlay="" loop="" width="240px" ref={videoEl}/>
          </div>
        </div>
      <p  className="card-text c-t">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe unde sint odit illo delectus incidunt a voluptas ut perferendis nulla? Laborum nemo a autem illum porro libero iusto? Harum dolores maxime numquam ipsam omnis molestias necessitatibus itaque et velit vero neque, quia, blanditiis facilis consectetur provident natus accusamus, repellendus inventore voluptatem! Reprehenderit, eveniet! Et non blanditiis totam dolorem illo voluptas, a magnam quas amet perspiciatis doloribus quidem eius temporibus fuga mollitia! Itaque, voluptatum! Magnam eius similique voluptas nulla officia, quam nihil reprehenderit odit voluptate quaerat, ipsam a recusandae assumenda possimus repudiandae? Eum aspernatur nulla porro explicabo, molestiae vitae dignissimos voluptate facilis voluptatum ex consequatur perferendis voluptatem assumenda veritatis unde sed? Id aliquid, distinctio modi tempora possimus quisquam, labore ex quaerat libero dolores inventore. Exercitationem vel sequi, doloremque distinctio impedit excepturi fuga velit iste libero vitae animi, recusandae suscipit deserunt dicta repellat quidem in at fugiat ex veniam expedita quaerat eius. Non fugit facere nobis corrupti eveniet ducimus maiores, enim natus eos, id sequi voluptate deleniti iste ullam impedit voluptates amet consequuntur qui suscipit libero praesentium veniam quas velit fugiat. Omnis delectus minus, earum praesentium quas laudantium, aut recusandae eveniet iure aspernatur architecto quod libero, magnam nihil nostrum quasi necessitatibus molestiae?</p>
      <div className="card mb-8"></div>
      </div>
    </>
  )
}
