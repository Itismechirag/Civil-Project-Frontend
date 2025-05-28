import React, { useState } from 'react';
import axios from 'axios';
import { Navbar } from './Navbar'
import { SlabRetroForm } from './SlabRetroForm';
import { PSCSlabForm } from './PSCSlabForm';
import { TBeamShearForm } from './TBeamForm';
import { Runbox } from './Runbox';
import './Homepage.css'
import { RCBeamForm } from './RCBeamForm';
import { useEffect } from 'react'; // already present likely
import { NonCircularColumnForm } from './NonCircularColumnForm';
import { InteriorRCBeamFlexuralForm } from './InteriorRCBeamForm';
import { ExteriorColumnShearForm } from './ShearExteriorColumnForm';






const host = 'http://127.0.0.1:5000/'
export const Homepage = () => {


  const [strn, setStrn] = useState('');
  const [slab, setSlab] = useState('');
  useEffect(() => {
    // update default inputs only when valid selections are made
    if (strn && slab) {
      setInputs(getDefaultInputs(strn, slab));
    }
  }, [strn, slab]);


  const [output, setOutput] = useState('');
  const [code, setCode] = useState('ACI');

  
  useEffect(() => {
    setOutput('');
  }, [slab,strn,code]);

  const getDefaultInputs = (strn, slab) => {
    if (strn === 'FRP' && slab === 'slabretrofit') {
      return {
        gradeOfConcrete: 50,
        gradeOfSteel: 500,
        thicknessToSlab: 200,
        coverToSlab: 25,
        spacingOfBarProvided: 100,
        diameterOfBarProvided: 10,
        ultimateStrength: 2900,
        ultimateStrain: 0.018,
        newDesignMoment: 115,
        momentDueToDeadLoad: 12.97,
        numberOfFibrePly: 1,
        thicknessOfFibre: 3,
        widthOfFibre: 243,
        elasticityBase: 1.65,
        elasticityExponent: 5,
        exposureCondition: 0.95,
      };
    } else if (strn === 'FRP' && slab === 'rcbeam') {
      return {
        f_fu_star: 1725,
        Eps_fu_star: 0.013,
        E_f: 132.7,
        l: 8.84,
        l_2: 9.14,
        A: 64.5,
        w: 610,
        d_f: 602.1,
        d: 546,
        f_c_dash: 34.5,
        C_E: 0.95,
        M_DL: 97.6,
        I_cr: 2471000000,
        k: 0.334,
        K_m: 0.7,
        Eps_fd: 0.0123,
        E_s: 200,
        f_y: 414,
        b: 305
      };
    } else if (strn === 'FRP' && slab === 'pscslab') {
      return {
        fck: 15,          // Grade of concrete (MPa)
        fy: 250,          // Grade of steel (MPa)
        Ds: 100,          // Thickness of slab (mm)
        b: 1350,          // Width of beam (mm)
        D: 1000,          // Depth of beam (mm)
        ddash: 45,        // Effective cover (mm)
        L: 40,            // Span of the beam (m)
        wdl: 70,          // Dead load (kN/m)
        Mnew: 8000,       // New factored demand moment in kNm
        Ep: 195000,       // Modulus of elasticity of prestressing steel (MPa)
        fpj: 1860,        // Initial stress in tendon (MPa)
        Ef: 150000,       // Modulus of elasticity of FRP (MPa)
        nt: 2,            // Number of tendons
        st: 12.7,         // Size of strand
        As1: 98.7,        // Area of one strand (mm²)
        ns: 30,           // Number of strands
        f_fu_star: 1400,  // Ultimate strength of FRP (MPa)
        eps_fu_star: 0.0075, // Ultimate strain in FRP
        Ce: 0.95,         // Environmental Reduction Factor
        n: 1,             // Number of ply
        tf: 4.9,          // Thickness of ply (mm)
        wf: 100           // Width of ply (mm)
      };
    } else if (strn === 'FRP' && slab === 'tbeam') {
      return {
        thicknessPerPly: 0.165,
        ultimateTensileStrength: 3790,
        ruptureStrain: 0.017,
        modulusOfElasticity: 227530,
        effectiveDepth: 559,
        widthOfTBeam: 150,
        effectiveDepthFRP: 406,
        widthOfSheet: 254,
        spanBetweenSheets: 305,
        frpStripLength: 1778,
        shearStrengthConcrete: 196600,
        shearStrengthSteel: 87200,
        requiredShearStrength: 253500,
        wrapType: 2,
        envReductionFactor: 0.95,
      };
    } else if (strn === 'FRP' && slab === 'noncircularcolumn') {
      return {
        f_c_spec: 45,
        f_y: 400,
        r_c: 25,
        b: 610,
        h: 610,
        n_bar: 12,
        d_bar: 32,
        t_f: 0.33,
        f_fu: 3792,
        epsilon_fu: 0.0167,
        E_f_base: 2.27527,  // because 227527 = 2.27527 × 10^5
        E_f_exp: 5,
        P_n_initial: 9281000,
        P_n_frp_required: 11138000,
        C_e: 0.95,
      };
    } else if (strn === 'FRP' && slab === 'shearexterior') {
      return {
        ultimateStrength: 552,             // MPa
        ultimateStrain: 0.02,              // -
        elasticityBase: 2.76,              // ×10^4 MPa
        elasticityExponent: 4,             // exponent part
        columnDiameter: 610,               // mm
        sheetWidth: 254,                   // mm
        sheetSpacing: 254,                 // mm
        plyThickness: 1.3,                 // mm
        shearStrengthRequired: 267,     // N
        exposure: 0.65,
      };
    } else if (strn === 'FRP' && slab === 'interiorrcbeam') {
      return {
        gradeOfConcrete: 34.5,           // f_c_ in MPa (N/mm²)
        gradeOfSteel: 414,               // f_y in MPa
        modulusofsteelelasticity: 200,   // E_s in MPa (kN/mm² ~ MPa)
        ultimateStrength: 621,           // f_fu_ in MPa
        ultimateStrain: 0.015,           // E_fu_ (mm/mm, no unit)
        elasticityBase: 3.7,             // E_f = 37000 MPa = 3.7 x10^4
        elasticityExponent: 4,           // exponent 4

        // Geometric Details
        widthOfBeam: 305,                // w in mm
        effectiveDepth: 546,             // d in mm
        totalDepth: 609.6,               // h in mm
        barArea: 645,                   // no bar area given, keep null or 0 for now
        numberOfBars: 3,                 // bars
        thicknessOfFibre: 1.02,          // t_f in mm
        numberOfFibrePly: 2,             // n number of plies

        // Loading Details
        newDesignMoment: 361,            // ΦM_n in kN·m (without FRP)
        momentDueToDeadLoad: 98,         // M_DL in kN·m
        crackedMomentInertia: 2471000000,      // no value given, keep null or 0

        // Environment Settings
        exposure: 0.95
      };
    } else {
      return {}; // fallback in case no condition is met
    }
  };

  const [inputs, setInputs] = useState(getDefaultInputs(strn, slab));

  const handleRun = async (e) => {
    e.preventDefault();

    try {
      let url = '';

      if (strn === 'FRP' && slab === 'slabretrofit' && code === 'ACI') {
        url = `${host}/api/frp_aci_slabretrofit`;
      } else if (strn === 'FRP' && slab === 'rcbeam' && code === 'ACI') {
        url = `${host}/api/frp_aci_rcbeam`;
      } else if (strn === 'FRP' && slab === 'pscslab' && code === 'ACI') {
        url = `${host}/api/frp_aci_pscbeam`;
      } else if (strn === 'FRP' && slab === 'tbeam' && code === 'ACI') {
        url = `${host}/api/frp_aci_tbeamshear`;
      } else if (strn === 'FRP' && slab === 'noncircularcolumn' && code === 'ACI') {
        url = `${host}/api/frp_aci_noncircularcolumn`;
      } else if (strn === 'FRP' && slab === 'interiorrcbeam' && code === 'ACI') {
        url = `${host}/api/frp_aci_interiorrcbeam`;
      } else if (strn === 'FRP' && slab === 'shearexterior' && code === 'ACI') {
        url = `${host}/api/frp_aci_shearexterior`;
      } else {
        alert('Please select a valid strengthening type and method.');
        return;
      }

      const response = await axios.post(url, inputs);
      const result = response.data;

      if (result.status === 'SAFE') {
        setOutput('✅ SAFE');
      } else if (result.status === 'UNSAFE') {
        setOutput('❌ UNSAFE');
      } else {
        setOutput(`⚠️ Status: ${result.status}`);
      }

    } catch (error) {
      alert("Error: " + (error.response?.data?.error || error.message));
    }
  };


  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar strn={strn} setStrn={setStrn} slab={slab} setSlab={setSlab} />
      <form className='allboxes'>

        {strn === 'FRP' && slab === 'slabretrofit'
          ? <>
            <SlabRetroForm handleChange={handleChange} inputs={inputs} />
          </>
          : null
        }
        {strn === 'FRP' && slab === 'rcbeam'
          ? <>
            <RCBeamForm handleChange={handleChange} inputs={inputs} />
          </>
          : null
        }
        {strn === 'FRP' && slab === 'pscslab'
          ? <>
            <PSCSlabForm handleChange={handleChange} inputs={inputs} />
          </>
          : null
        }

        {strn === 'FRP' && slab === 'tbeam'
          ? <>
            <TBeamShearForm handleChange={handleChange} inputs={inputs} />
          </>
          : null
        }

        {strn === 'FRP' && slab === 'noncircularcolumn'
          ? <>
            <NonCircularColumnForm handleChange={handleChange} inputs={inputs} />
          </>
          : null
        }

        {strn === 'FRP' && slab === 'interiorrcbeam'
          ? <>
            <InteriorRCBeamFlexuralForm handleChange={handleChange} inputs={inputs} />
          </>
          : null
        }

        {strn === 'FRP' && slab === 'shearexterior'
          ? <>
            <ExteriorColumnShearForm handleChange={handleChange} inputs={inputs} />
          </>
          : null
        }


        {strn !== '' && slab !== ''
          ? <>
            <Runbox handleRun={handleRun} code={code} setCode={setCode} output={output} />
          </>
          : null
        }



      </form>


    </>
  )
}
