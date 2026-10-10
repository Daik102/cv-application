import { useState } from 'react'
import '../styles/Resume.css'

const initialFormState = {
  userName: '',
  email: '',
  phone: '',
  schoolName: '',
  titleOfStudy: '',
  dateOfStudyFrom: '',
  dateOfStudyTo: '',
  companyName: '',
  positionTitle: '',
  mainResponsibilities: '',
  dateOfWorkFrom: '',
  dateOfWorkTo: '',
}

function Resume() {
  const [info, setInfo] = useState(initialFormState);
  const [errors, setErrors] = useState(true);

  function handleDialog(mode, action, e) {
    if (mode === 'edit') {
      const dialog = document.querySelector('.dialog');

      if (action === 'open') {
        dialog.showModal();
      } else {
        dialog.close();
      }
    } else if (mode === 'submit') {
      const message = document.querySelector('.message');

      if (action === 'open') {
        e.preventDefault();
        console.log(Object.keys(validationErrors).length);
        const c = document.querySelector('.user-name');
        console.log(a.validity);
        if (a.validity.valueMissing) {
          console.log('hey');
          
          c.reportValidity();
          return;
        }

        let validationErrors = {};

        if (!info.userName.trim()) {
          validationErrors.userName = "Name is strictly required!";
        }

        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }

        message.showModal();
      } else {
        message.close();
      }
    } else if (mode === 'reset') {
      setInfo(initialFormState);
    }
  }

  function handleInput(e) {
    const { name, value } = e.target;
    
    if (!e.target.validity.valueMissing) {
      setErrors(false);
    } else {
      setErrors(true);
    }

    setInfo((prev) => ({
      ...prev, [name]: value
    }));
  }
  console.log(errors);
  return (
    <>
      <dialog className="dialog">
        <form id="cv-editor" onSubmit={(e) => handleDialog('submit', 'open', e)}>
          <div className="dialog-section">
            <div>
              <label htmlFor="user-name">Name: </label>
              <input type="text" name="userName" value={info.userName} id="user-name" maxLength={30} onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" value={info.email} id="email" maxLength={30} onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="phone">Phone: </label>
              <input type="tel" name="phone" value={info.phone} id="phone" maxLength={15} onChange={handleInput} />
            </div>
          </div>
          <div className="dialog-section">
            <h3>Educational experience</h3>
            <div>
              <label htmlFor="school-name">School name: </label>
              <input type="text" name="schoolName" value={info.schoolName} id="school-name" maxLength={30} onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="title-of-study">Title of study: </label>
              <input type="text" name="titleOfStudy" value={info.titleOfStudy} id="title-of-study" maxLength={30} onChange={handleInput} />
            </div>
            <div>
              <div>
                <label htmlFor="date-of-study-from">Date of study: From </label>
                <input type="number" name="dateOfStudyFrom" value={info.dateOfStudyFrom} id="date-of-study-from" onChange={handleInput} />
                <label htmlFor="date-of-study-to"> To </label>
                <input type="number" name="dateOfStudyTo" value={info.dateOfStudyTo} id="date-of-study-to" onChange={handleInput} />
              </div>
            </div>
          </div>
          <div className="dialog-section">
            <h3>Practical experience</h3>
            <div>
              <label htmlFor="company-name">Company name: </label>
              <input type="text" name="companyName" value={info.companyName} id="company-name" maxLength={30} onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="position-title">Position title: </label>
              <input type="text" name="positionTitle" value={info.positionTitle} id="position-title" maxLength={30} onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="main-responsibilities">Main responsibilities: </label>
              <input type="text" name="mainResponsibilities" value={info.mainResponsibilities} id="main-responsibilities" maxLength={30} onChange={handleInput} />
            </div>
            <div>
              <div>
                <label htmlFor="date-of-work-from">Date of work: From </label>
                <input type="number" name="dateOfWorkFrom" value={info.dateOfWorkFrom} id="date-of-work-from" onChange={handleInput} />
                <label htmlFor="date-of-work-to"> To </label>
                <input type="number" name="dateOfWorkTo" value={info.dateOfWorkTo} id="date-of-work-to" onChange={handleInput} />
              </div>
            </div>
          </div>
          <div className="dialog-btn-container">
            <button className="do-edit-btn" type="button" onClick={() => handleDialog('edit', 'close')}>Edit</button>
            <button className="reset-btn" type="button" onClick={() => handleDialog('reset')}>Reset</button>
          </div>
        </form>
      </dialog>
      <dialog className="message">
        <form>
          <div className="message-container">
            <p className="success-message">Successfully Submitted!</p>
            <p className="notice-message">(Don't worry, this is a practice site.)</p>
          </div>
          <button className="close-btn" type="button" onClick={() => handleDialog('submit', 'close')}>Close</button>
        </form>
      </dialog>
      <div className="wrapper">
        <h1>Odin CV Application</h1>
        <div className="btn-container">
          <button className="edit-btn" type="button" onClick={() => handleDialog('edit', 'open')}>Edit</button>
          <button className="submit-btn" type="submit" form="cv-editor">Submit</button>
        </div>
        <div className="content">
          <section className="general-section">
          <h2 className="user-name">{info.userName}</h2>
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
          <section className="practical-section">
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
        </div>
        <div className="link-container">
          <a className="link" href="https://daik102.github.io/homepage/" target="_blank">2026 Daik</a>
        </div>
      </div>
    </>
  );
}

export default Resume
