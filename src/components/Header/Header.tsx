import { FC, useEffect, useState } from 'react'
import UContainer from '../UContainer/UContainer'
import { Link } from 'react-router-dom'
import BTN from '../../UI/BTN/BTN';
import sun from '../../assets/sun-svgrepo-com.svg'
import moon from '../../assets/moon-svgrepo-com.svg'
import imgUZB from '../../assets/lang/uzbekistan2.avif'
import imgRUS from '../../assets/lang/russia2.avif'
import imgUSA from '../../assets/lang/united-states2.avif'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../hooks/useTheme'



import './Header.scss'

const Header: FC = () => {
  const [activeBurger, setActiveBurger] = useState(false)
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()

  const handleThemeClick = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const handleActiveBurger = () => {
    setActiveBurger(!activeBurger)
  }

  const langList = [
    { name: 'uz', image: imgUZB },
    { name: 'ru', image: imgRUS },
    { name: 'us', image: imgUSA },
  ]

  useEffect(() => {
    if (activeBurger) {
      document.body.classList.add('fixed')
    } else {
      document.body.classList.remove('fixed')
    }
  }, [activeBurger])

  return <div className="header">
    <UContainer>
      <div className="header__wrap">
        <div className="header__logo">
          <Link to='/' className='header__logo-link'>
            <svg version="1.0" width="728.000000pt" height="652.000000pt" viewBox="0 0 728.000000 652.000000"
              preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,652.000000) scale(0.100000,-0.100000)"
                fill="current" stroke="none">
                <path d="M1584 6137 c-60 -61 -190 -195 -288 -297 -99 -102 -252 -259 -340
-350 -88 -91 -235 -242 -326 -335 -91 -94 -243 -250 -338 -348 l-174 -177 68
-97 c37 -54 99 -143 138 -198 38 -55 108 -156 156 -225 47 -69 135 -195 195
-280 59 -85 110 -162 112 -170 2 -8 -50 -91 -115 -185 -65 -93 -176 -253 -247
-355 -71 -102 -144 -207 -164 -235 -19 -27 -59 -85 -89 -128 l-54 -77 174
-178 c95 -97 247 -253 338 -347 91 -93 238 -244 326 -335 88 -91 290 -299 449
-462 159 -164 290 -298 291 -298 3 0 -42 65 -270 392 -34 48 -129 186 -212
305 -83 120 -262 377 -398 572 l-246 353 61 87 c33 47 133 191 222 318 89 128
165 233 169 233 8 0 33 -34 210 -290 74 -107 293 -422 486 -700 193 -278 366
-527 384 -553 18 -26 43 -60 56 -75 l22 -27 -12 30 c-7 17 -23 47 -35 67 -13
21 -23 42 -23 48 0 11 -51 121 -510 1090 -262 553 -350 741 -350 745 0 2 26
40 58 85 31 45 70 103 87 128 28 44 393 581 647 952 62 91 166 244 232 340
l119 175 -264 -260 c-145 -142 -280 -275 -299 -295 -19 -19 -209 -207 -421
-418 l-386 -384 -149 214 c-81 117 -170 245 -196 283 -26 39 -61 89 -78 112
l-31 42 49 68 c26 37 109 156 184 263 74 107 218 314 320 460 385 552 577 830
575 830 -2 0 -52 -51 -113 -113z"/>
                <path d="M5642 6220 c14 -19 101 -145 195 -280 93 -135 223 -321 288 -415 136
-195 483 -693 562 -807 29 -42 53 -81 53 -88 0 -14 -29 -69 -47 -87 -7 -8 -98
-137 -204 -289 -105 -151 -193 -274 -195 -272 -1 2 -202 201 -446 443 -244
242 -550 546 -682 675 l-238 235 122 -180 c118 -174 144 -214 308 -465 41 -63
107 -158 146 -210 69 -93 336 -481 426 -620 25 -38 66 -99 93 -135 26 -36 47
-68 47 -70 0 -3 -171 -366 -367 -780 -53 -110 -113 -238 -135 -285 -82 -175
-97 -207 -140 -300 -155 -330 -148 -315 -185 -385 -6 -11 -18 -38 -28 -60 -10
-22 -33 -74 -52 -115 -19 -41 -33 -73 -30 -70 12 13 218 303 229 323 7 13 94
139 193 281 193 276 291 417 567 814 l176 253 162 -233 c88 -128 190 -274 225
-324 l64 -92 -137 -198 c-76 -110 -284 -408 -462 -664 -178 -256 -370 -532
-427 -615 l-104 -150 127 130 c294 301 467 478 764 785 173 179 400 412 503
518 l188 193 -64 92 c-35 51 -185 265 -332 477 -147 212 -270 392 -272 400 -2
8 22 52 54 97 129 183 443 635 526 755 l87 128 -347 357 c-191 197 -399 412
-462 477 -126 130 -468 480 -656 671 -65 66 -107 104 -93 85z"/>
                <path d="M3384 5769 c-10 -12 -19 -24 -19 -28 0 -3 -4 -5 -8 -3 -5 1 -6 -1 -3
-6 3 -5 -24 -37 -60 -73 -36 -35 -163 -170 -282 -299 -119 -129 -241 -260
-272 -291 -30 -30 -72 -75 -94 -100 -21 -24 -91 -100 -155 -169 -64 -69 -134
-145 -155 -170 -22 -25 -85 -94 -140 -153 -56 -59 -101 -111 -102 -115 0 -4
-34 -41 -75 -82 -41 -42 -90 -97 -108 -123 -19 -26 -37 -47 -41 -47 -6 0 -266
-276 -391 -414 -40 -45 -41 -48 -11 -27 17 12 32 27 32 32 0 5 4 8 8 7 11 -4
18 1 771 541 333 238 611 435 618 438 11 4 13 -63 13 -353 l-1 -359 -537 -538
-537 -538 36 -75 c20 -41 43 -82 51 -92 9 -9 302 -519 652 -1132 351 -613 641
-1122 646 -1130 5 -8 48 -84 95 -167 48 -84 89 -153 91 -153 2 0 4 649 3 1443
l-1 1442 -43 -170 c-24 -93 -96 -387 -161 -652 -65 -266 -121 -483 -125 -483
-4 0 -60 93 -125 208 -64 114 -138 243 -164 287 -26 44 -87 150 -135 235 -49
85 -99 173 -113 195 -14 22 -40 67 -57 101 l-32 62 478 478 479 479 0 1008 c0
554 -2 1007 -4 1007 -1 0 -11 -9 -22 -21z"/>
                <path d="M3911 4865 c0 -512 3 -925 5 -920 2 6 69 181 148 390 79 209 148 380
153 380 5 0 121 -121 258 -270 136 -148 263 -286 283 -307 l34 -36 -32 -59
c-18 -32 -61 -107 -95 -168 -55 -97 -136 -240 -488 -870 -49 -88 -112 -200
-139 -250 -28 -49 -68 -120 -89 -157 l-39 -67 0 -1190 c0 -655 2 -1191 4
-1191 3 0 36 55 76 122 39 68 75 130 80 138 4 8 17 31 27 51 10 20 411 724
892 1565 480 841 876 1534 878 1539 8 18 -39 -39 -298 -361 -141 -176 -404
-503 -585 -727 -181 -225 -379 -472 -441 -550 -62 -78 -117 -143 -123 -145 -7
-3 -10 96 -10 309 l0 312 29 51 c15 28 80 143 143 256 63 113 157 279 208 370
51 91 104 185 118 210 14 25 130 233 259 463 l233 417 -48 58 c-26 31 -83 93
-125 137 -43 44 -99 105 -125 135 -47 57 -87 100 -234 255 -95 101 -218 234
-622 675 -153 168 -292 318 -308 335 l-28 30 1 -930z"/>
              </g>
            </svg>
          </Link>
        </div>
        <div className={activeBurger ? "header__burger header__active-burger" : "header__burger"} onClick={() => handleActiveBurger()}>
          <span></span>
        </div>
        <div className={activeBurger ? 'header__menu header__active-menu' : "header__menu"}>

          <nav className={activeBurger ? 'header__navbar header__active-navbar' : 'header__navbar'}>
            <Link to='/' className='header__nav-link'>
              <BTN text={t('header-nav.about-me')} value={'/'} />
            </Link>
            <Link to='/work' className='header__nav-link'>
              <BTN text={t('header-nav.works')} value={'/work' } />
            </Link>
          </nav>
          <div className="header__toolbar">
            <div className="header__lang">
              {langList.map((item, i) => (
                <button key={i} className={i18n.language === item.name ? 'header__lang-item active-lang' : 'header__lang-item'} type='submit' onClick={() => i18n.changeLanguage(item.name)}>
                  <img src={item.image} alt={item.name} />
                </button>
              ))}
            </div>
            <button className="header__relay" onClick={() => handleThemeClick()}>
              <img src={theme === 'light' ? moon : sun} alt="relay" />
            </button>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
}

export default Header