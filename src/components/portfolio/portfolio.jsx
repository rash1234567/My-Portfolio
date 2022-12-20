import React from 'react';
import "./portfolio.css";
import {Link} from 'react-router-dom'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src='https://lh3.googleusercontent.com/wS-8MMl9a56D3WiBXqNzuLS5t1Lz71v7xAhE9A9a41g9qU-HNviiqdQvYjPWzsvjXn8EvMdvwEzTyUlGlyx5oJOVWK35v5vhUCTKQuU4VMeeiJ6eSiay5_PveY9-YDvykJZ8fNu2dA9njJtLJgs1SvfQ09jvooj0eo1eNhGkVJpi2wBSIJ9G8LgBDEELk0rXL7sIip9PFDnfJc10dxIsUD1_p7PqI3m7dSI74FeqzT4xiBNDsfYw9ScWXZVXgjhKzvLIGGleAlutMiD5JxEreqFvnwKIYjp62mEa9MadQwy66IKoJnOvyGfXJcxKpQoLQxL5eaAX4SHHDY8lUdGAJF7klo23lgayUCpAczput9fqPnin6e2ATd6ukZ9WWoKxedy9kl03btzXFhkBt4ONDcOGnOxwYmcGLutBhD4gJQ9ncD3cZonT_03eJdKqYcK_-yMXXM-ha-XvjJzA2qXkRDiuxs2Q7O4A0Iwww6A6usrIYOlfmW5xSWazfm_EHF3-xtC_EeTEe1nwLqHl5E438FPAkgXbRVTVfKtGEswB2m1ozCjTHaMTD5qNQNwm-s9RuGwFf4Bt-EiX49QshkJgInxOtUhEX3JY9YYeOiObHOxuOHueqy0lwv_Fnp7AMWhi5oNGJCcOk0AiS95TaVPJbOIrYvea0Bw6T-9ywMkHYWTiy6G6qA2TsyHTBnfiv_BEmd9iOXplo2hYmAjKtj9rq7PQhhhhv-jbbFBYiITk5UTTCnMgWkLWHs-zw05sYJrYwJcUV_Ifqhbo8v71D1zXQZ1Wts-XZCrHzLI3UwUdGLvPMR2VRpNUYtcTz4ErcGTy76CqepwMvPUpJNeZPp0gY9_byYmDwR3viUFUnCOI2G02-vyRozvdRMTRn4NMNmEvereZcYAeqztkIet5o5XszsN-vQ8S_EfhxGCLr5MTi6uKO2CeatBlMMY0DmdbU7KAycyom8RYyc1fpEp8VA=w1364-h657-no?authuser=0' alt="" />
          </div>
          <h3>Vividioz</h3>
          <div className='portfolio__item-cta flex justify-around'>
          <a href="https://github.com/rash1234567/NEWVIVIDIO" className='btn' target='_blank'>Github</a>
          <a href="https://vividioz.onrender.com/" className='btn btn-primary' target='_blank'>Live
           Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src='https://lh3.googleusercontent.com/nK06rbdMrpqeoSzkR0FpIjS5yk4YVFnzQl4LDgagfYDAIc76xqsVau_eFK6lOV9n0jKPukqo95RWZqbsBBOR1JXMJBPyyYxJkFe4p47pIIQnVIz1-Q-SdmSPtndpYul5lXQlitUeX6dMaP1Vtz_y3aaXI9tKGUYa_n07GuVtEjXGIOiUcSBZHYM0xOlGJuYyhHlFiExFGyTWIf6JS_sSDYRmdNCWE5FGUKJTbdEW9hLPRszKMpP26qj8gFVXokh11JyKNsia8x_8EUQJCCxhGtBgl44TPHz4XtIQxyZ0IMj5jbwvChgzzDG2-GWPAViyGwtUwZZb4SVfrXgXPLvzRrCQvSE9ExhXtWHE4kyIqqjFx1r6qeNDbQ9UiOWBRwfGcJvO1GkIGQTrVAZz7DTT-Tkj0ZrF3QxD7bQLeVclBdF5HMdL_ih8VW_g3Yb3SHro2YvU8gVvJnttfWfDRhEA1mHfpgsZGfUwpFk4ZFeyJ3gRsnKdgFAby36lvyz9Rzhe9aBUD8_D6uRAMiOeFm0s9xDLVAX8gYshF_S-WZyKyGbw_CookC1xeui0DTxJa5_8-fMDKrkaM92zWR8Rp4z43Wj9V4697TEpZS3LwlBETkYVIenqXfJ4XCBD-BOhZ26fKVS_vAkE3u3b3BC1qFIEfULRE65YqSba4UU6vMAzGMizpjb3YqkU3fH7_gQ_BLAs-AJso0x05D6nIbT-DyKUwLa53kr3tx2vYnqdHoTLV2Zl-R0_YhgyynZeSU9i_GTspukePIazDD_oXoiWwJEun0vmBm4FG-N0n_YO5N_goUiU4xZ5waC5vOgD0k5Yla-8FpWSF5_nRuo6fNsmSsFtbXC0iy4C2k0uLOCRuVGpAYAb4mE0RR5PjJsbzm1BeliNevGwfPpsgDGHzRBcHlpCA1FI-Rnr2abcRJ1N5tPc5922hSe8OYAhKpW6IfXalpT5p2rrwDZtk37RD1pXHA=w652-h319-no?authuser=0' alt="" />
          </div>
          <h3>A'pple</h3>
          <div className='portfolio__item-cta flex justify-around'>
          <a href="https://github.com/Lawdshev/Apple" className='btn' target='_blank'>Github</a>
          <a href="https://majestic-gelato-78453c.netlify.app/" className='btn btn-primary' target='_blank'>Live
           Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src='https://lh3.googleusercontent.com/Fl99Poo3BBfur4VR0c2UPu-S4fh676uxNOLZlAX_gjLrZTQ2gebNmH7sxw8Vwo_l-quW2RCNCF_z11ZL80D3iH0U9pQExo2VqrBDF081qKvmaKSvqdFG_fLVAuBEE25JdwYq2f-bSsGsNXhIsRmowlHyFgX1lHy-PkkYEzXjPF1QwWOChJZqnnCyx2W6c5Su8zeJR5nYDjTck2h4PoXc5YRzFLyd1BNYy5WB_YhsAeqjUMJqospDOwEgSx2dEzY-f38YO1z04QN4ihS0p8hCqnkChYvvU5YEkgrCE0_r6aV058UR3doNRIthco2BMA3kYBkoNrXlHNu-YuuAhygZBwTHrlfsYzu92UdC3b0cl8Ldh_F0p1wew-Zc5qpQDViWAMvRLCrrUobYlDJYKyS3vdSA_i32IqUHVXZlBw_hQ_3Hl3WkquXVdewsJIH-aowFT4spYYtth8kh9vDJHQy7Qyi-agqASveMXLWH7oJDih6JKIMI1mFpQZYuNQfUCQqH5RdVIS0qMygfoqNh141Fztweq2SS4vY2DT3lO5eKbvfJvJ9FBHvOGkK3cl4CrdLDMZ3LIKS97Et6vj2zvK1xATpFZFFv1K0BJZAnj3nF4J04d4X_1SqSsq3Ma9Bb3Jl_BgWJQiLAt2s3aYSqB_-lb0D7eOCbICksa6wdp0AzvLBKijeLdoKSiQKJhy47-Rc1TW52XghJ5Fs78EpAx7RYc6hjZ-9xR4ci8D52nz1VQJKqmgGiDWM6s2W80vHzF3-knGzv1UREN2XIAzzEde5vkLz73oqBfjm93ITMRFjjOtXJvrrWznGe6xyH6GfOlNT2Ot9BMzquzWthmLIHx8bS-0kVeICT2BW5kASELuBxhw_aJggnP_PjjSW4s6xSi7eUi-spS_RkYudpfhTPjErp9Q2w2AhxJup5VIAWD666a04uXdbb9BMcxLX0TwDev9-jQbP018WqLi6HggcLkQ=w1346-h654-no?authuser=0' alt="" />
          </div>
          <h3>Alicia University</h3>
          <div className='portfolio__item-cta flex justify-around'>
          <a href="https://github.com/Lawdshev/Alicia-University" className='btn' target='_blank'>Github</a>
          <a href="https://aliciauniversity.netlify.app" className='btn btn-primary' target='_blank'>Live
           Demo</a>
          </div>
        </article>
      </div>
      <div className="w-full flex mt-2"> <Link to='/projects' className='mx-auto text-xl md:text-3xl'>See more <i class="fa-solid fa-right-long"></i></Link></div>
    </section>
  )
}

export default portfolio
