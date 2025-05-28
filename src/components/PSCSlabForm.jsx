import React from "react";
import materialImg from '../assets/material.png';
import geodetImg from '../assets/geodetail.png';
import loaddetImg from '../assets/loaddet.png';
import envsetImg from '../assets/envset.png';
import './Homepage.css';

export const PSCSlabForm = ({ inputs, handleChange }) => {
  return (
    <>
      <div className="materialprops">
        <div className="title">
          <img src={materialImg} alt="Material Properties" />
          <span>Material Properties</span>
        </div>

        <label>
          Grade of Concrete
          <input type="number" name="fck" value={inputs.fck} onChange={handleChange} />
          <span className="unit">MPa</span>
        </label>

        <label>
          Grade of Steel
          <input type="number" name="fy" value={inputs.fy} onChange={handleChange} />
          <span className="unit">MPa</span>
        </label>

        <label>
          Modulus of Prestressing Steel
          <input type="number" name="Ep" value={inputs.Ep} onChange={handleChange} />
          <span className="unit">MPa</span>
        </label>

        <label>
          Prestressing Steel Strength
          <input type="number" name="fpj" value={inputs.fpj} onChange={handleChange} />
          <span className="unit">MPa</span>
        </label>

        <label>
          Modulus of Fibre
          <input type="number" name="Ef" value={inputs.Ef} onChange={handleChange} />
          <span className="unit">MPa</span>
        </label>

        <label>
          Ultimate Fibre Strength
          <input type="number" name="f_fu_star" value={inputs.f_fu_star} onChange={handleChange} />
          <span className="unit">MPa</span>
        </label>

        <label>
          Ultimate Fibre Strain
          <input type="number" name="eps_fu_star" value={inputs.eps_fu_star} onChange={handleChange} />
        </label>
      </div>

      <div className="materialprops geodet">
        <div className="title">
          <img src={geodetImg} alt="Geometric Details" />
          <span>Geometric Details</span>
        </div>

        <label>
          Thickness of Slab
          <input type="number" name="Ds" value={inputs.Ds} onChange={handleChange} />
          <span className="unit">mm</span>
        </label>

        <label>
          Width of Beam
          <input type="number" name="b" value={inputs.b} onChange={handleChange} />
          <span className="unit">mm</span>
        </label>

        <label>
          Depth of Beam
          <input type="number" name="D" value={inputs.D} onChange={handleChange} />
          <span className="unit">mm</span>
        </label>

        <label>
          Effective Cover
          <input type="number" name="ddash" value={inputs.ddash} onChange={handleChange} />
          <span className="unit">mm</span>
        </label>

        <label>
          Span of Beam
          <input type="number" name="L" value={inputs.L} onChange={handleChange} />
          <span className="unit">m</span>
        </label>

        <label>
          Dead Load
          <input type="number" name="wdl" value={inputs.wdl} onChange={handleChange} />
          <span className="unit">kN/m</span>
        </label>

        <label>
          New Design Moment
          <input type="number" name="Mnew" value={inputs.Mnew} onChange={handleChange} />
          <span className="unit">kNm</span>
        </label>
      </div>
      <div>
      <div className="materialprops loaddet">
        <div className="title">
          <img src={loaddetImg} alt="Tendon Details" />
          <span>Tendon Details</span>
        </div>

        <label>
          Number of Tendons
          <input type="number" name="nt" value={inputs.nt} onChange={handleChange} />
        </label>

        <label>
          Size of Strand
          <input type="number" name="st" value={inputs.st} onChange={handleChange} />
          <span className="unit">mm</span>
        </label>

        <label>
          Area of Strand
          <input type="number" name="As1" value={inputs.As1} onChange={handleChange} />
          <span className="unit">mm²</span>
        </label>

        <label>
          Number of Strands
          <input type="number" name="ns" value={inputs.ns} onChange={handleChange} />
        </label>
      </div>

      <div className="materialprops envset">
        <div className="title">
          <img src={envsetImg} alt="Fibre Properties" />
          <span>Fibre Properties</span>
        </div>

        <label>
          Number of Fibre Ply
          <input type="number" name="n" value={inputs.n} onChange={handleChange} />
        </label>

        <label>
          Thickness of Fibre
          <input type="number" name="tf" value={inputs.tf} onChange={handleChange} />
          <span className="unit">mm</span>
        </label>

        <label>
          Width of Fibre
          <input type="number" name="wf" value={inputs.wf} onChange={handleChange} />
          <span className="unit">mm</span>
        </label>
      </div>
      </div>
    </>
  );
};
