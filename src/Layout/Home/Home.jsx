import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import changeLanguage from '../../store/action'

export default function Home() {
  const language = useSelector((state) => state.language.lang)
  const dispatch = useDispatch()

  const toggleLanguage = () => {
    dispatch(changeLanguage(language === 'en' ? 'ar' : 'en'))
  }

  useEffect(() => {
    document.dir = language === 'en' ? 'ltr' : 'rtl';
  }, [language]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mt-3 mb-5">
        <i className='fas fa-heart'></i>
        <h1>Home</h1>
        <h2>Language: {language === 'en' ? 'English' : 'العربية'}</h2>
        <button className={`btn btn-${language === 'en' ? 'success' : 'primary'}`} onClick={toggleLanguage}>
          <i className={`fas ${language === 'en' ? 'fa-globe' : 'fa-globe'}`}></i> {language === 'en' ? 'Change to Arabic' : 'تغيير إلى الإنجليزية'}
        </button>
      </div>
      <div className="row">
        <div className="col">
          <p>{language === 'en' ? 'Welcome to our website!' : 'مرحبًا بك في موقعنا!'}</p>
        </div>
      </div>
    </div>
  )
}
