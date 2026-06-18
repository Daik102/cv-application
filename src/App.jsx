import { useState } from 'react'
import './App.css'

function App() {
  const [info, setInfo] = useState({});

  function openDialog() {
    const dialog = document.querySelector('.dialog');
    dialog.showModal();
  }

  function closeDialog() {
    const dialog = document.querySelector('.dialog');
    dialog.close();
  }

  return (
    <>
      <dialog className='dialog'>
      <form>
        <div>
          <h2>General information</h2>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" onChange={e => setInfo({ ...info, name: e.target.value })} />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" onChange={e => setInfo({ ...info, email: e.target.value })} />
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input type="tel" name="phone" id="phone" onChange={e => setInfo({ ...info, phone: e.target.value })} />
          </div>
        </div>
        <div>
          <h2>Educational experience</h2>
          <div>
            <label htmlFor="school-name">School name: </label>
            <input type="text" name="school-name" id="school-name" onChange={e => setInfo({ ...info, schoolName: e.target.value })} />
          </div>
          <div>
            <label htmlFor="title-of-study">Title of study: </label>
            <input type="text" name="title-of-study" id="title-of-study" onChange={e => setInfo({ ...info, titleOfStudy: e.target.value })} />
          </div>
          <div>
            <div>
              <label htmlFor="date-of-study-from">Date of study: From </label>
              <input type="text" name="date-of-study-from" id="date-of-study-from" onChange={e => setInfo({ ...info, dateOfStudyFrom: e.target.value })} />
            </div>
            <div>
              <label htmlFor="date-of-study-to">To </label>
              <input type="text" name="date-of-study-to" id="date-of-study-to" onChange={e => setInfo({ ...info, dateOfStudyTo: e.target.value })} />
            </div>
          </div>
        </div>
        <div>
          <h2>Practical experience</h2>
          <div>
            <label htmlFor="company-name">Company name: </label>
            <input type="text" name="company-name" id="company-name" onChange={e => setInfo({ ...info, companyName: e.target.value })} />
          </div>
          <div>
            <label htmlFor="position-title">Position title: </label>
            <input type="text" name="position-title" id="position-title" onChange={e => setInfo({ ...info, positionTitle: e.target.value })} />
          </div>
          <div>
            <label htmlFor="main-responsibilities">Main responsibilities: </label>
            <input type="text" name="main-responsibilities" id="main-responsibilities" onChange={e => setInfo({ ...info, mainResponsibilities: e.target.value })} />
          </div>
          <div>
            <div>
              <label htmlFor="date-of-work-from">Date of work: From </label>
              <input type="text" name="date-of-work-from" id="date-of-work-from" onChange={e => setInfo({ ...info, dateOfWorkFrom: e.target.value })} />
            </div>
            <div>
              <label htmlFor="date-of-work-to">To </label>
              <input type="text" name="date-of-work-to" id="date-of-work-to" onChange={e => setInfo({ ...info, dateOfWorkTo: e.target.value })} />
            </div>
          </div>
        </div>
        <button type='button' onClick={closeDialog}>Edit</button>
      </form>
      </dialog>
      <h1>Odin CV Application</h1>
      <section>
        <h2>General information</h2>
        <div>
          <p>Name: </p>
          <p>{info.name}</p>
        </div>
        <div>
          <p>Email: </p>
          <p>{info.email}</p>
        </div>
        <div>
          <p>Phone: </p>
          <p>{info.phone}</p>
        </div>
      </section>
      <section>
        <h2>Educational experience</h2>
        <div>
          <p>School name: </p>
          <p>{info.schoolName}</p>
        </div>
        <div>
          <p>Title of study: </p>
          <p>{info.titleOfStudy}</p>
        </div>
        <div>
          <div>
            <p>Date of study: From </p>
            <p>{info.dateOfStudyFrom}</p>
          </div>
          <div>
            <p>to </p>
            <p>{info.dateOfStudyTo}</p>
          </div>
        </div>
      </section>
      <section>
        <h2>Practical experience</h2>
        <div>
          <p>Company name: </p>
          <p>{info.companyName}</p>
        </div>
        <div>
          <p>Position title: </p>
          <p>{info.positionTitle}</p>
        </div>
        <div>
          <p>Main responsibilities: </p>
          <p>{info.mainResponsibilities}</p>
        </div>
        <div>
          <div>
            <p>Date of work: From </p>
            <p>{info.dateOfWorkFrom}</p>
          </div>
          <div>
            <p>to </p>
            <p>{info.dateOfWorkTo}</p>
          </div>
        </div>
      </section>
      <div>
        <button>Submit</button>
        <button onClick={openDialog}>Edit</button>
      </div>
    </>
  );
}

export default App
