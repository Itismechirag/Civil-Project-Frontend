import React from "react";
import materialImg from '../assets/material.png';
import geodetImg from '../assets/geodetail.png';
import loaddetImg from '../assets/loaddet.png';
import envsetImg from '../assets/envset.png';
import './Homepage.css';

export const InteriorRCBeamFlexuralForm = ({ inputs, handleChange }) => {
  return (
    <>
      <div className="materialprops">
        <div className="title">
          <img src={materialImg} alt="Material Properties" />
          <span>Material Properties</span>
        </div>

        <label>
          Grade of Concrete
          <input
            type="number"
            name="gradeOfConcrete"
            value={inputs.gradeOfConcrete}
            onChange={handleChange}
          />
          <span className="unit">MPa</span>
        </label>

        <label>
          Grade of Steel
          <input
            type="number"
            name="gradeOfSteel"
            value={inputs.gradeOfSteel}
            onChange={handleChange}
          />
          <span className="unit">MPa</span>
        </label>

        <label>
          Modulus of Steel
          <input
            type="number"
            name="modulusofsteelelasticity"
            value={inputs.modulusofsteelelasticity}
            onChange={handleChange}
          />
          <span className="unit">MPa</span>
        </label>

        <label>
          FRP Ultimate Strength
          <input
            type="number"
            name="ultimateStrength"
            value={inputs.ultimateStrength}
            onChange={handleChange}
          />
          <span className="unit">MPa</span>
        </label>

        <label>
          FRP Ultimate Strain
          <input
            type="number"
            name="ultimateStrain"
            value={inputs.ultimateStrain}
            onChange={handleChange}
          />
        </label>

        <label>
          Modulus of Elasticity of FRP
          <div className="elasticity">
            <input
              type="number"
              name="elasticityBase"
              value={inputs.elasticityBase}
              onChange={handleChange}
            />
            <span>x10^</span>
            <input
              type="number"
              name="elasticityExponent"
              value={inputs.elasticityExponent}
              onChange={handleChange}
            />
          </div>
          <span className="unit">MPa</span>
        </label>
      </div>

      <div className="materialprops geodet">
        <div className="title">
          <img src={geodetImg} alt="Geometric Details" />
          <span>Geometric Details</span>
        </div>

        <label>
          Beam Width (w)
          <input
            type="number"
            name="widthOfBeam"
            value={inputs.widthOfBeam}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Effective Depth (d)
          <input
            type="number"
            name="effectiveDepth"
            value={inputs.effectiveDepth}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Total Depth (h)
          <input
            type="number"
            name="totalDepth"
            value={inputs.totalDepth}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Area of One Bar
          <input
            type="number"
            name="barArea"
            value={inputs.barArea}
            onChange={handleChange}
          />
          <span className="unit">mm²</span>
        </label>

        <label>
          Number of Bars
          <input
            type="number"
            name="numberOfBars"
            value={inputs.numberOfBars}
            onChange={handleChange}
          />
        </label>

        <label>
          FRP Thickness (t_f)
          <input
            type="number"
            name="thicknessOfFibre"
            value={inputs.thicknessOfFibre}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Number of FRP Plies
          <input
            type="number"
            name="numberOfFibrePly"
            value={inputs.numberOfFibrePly}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <div className="materialprops loaddet">
          <div className="title">
            <img src={loaddetImg} alt="Loading Details" />
            <span>Loading Details</span>
          </div>

          <label>
            Design Ultimate Moment
            <input
              type="number"
              name="newDesignMoment"
              value={inputs.newDesignMoment}
              onChange={handleChange}
            />
            <span className="unit">kN·m</span>
          </label>

          <label>
            Moment Due to Dead Load
            <input
              type="number"
              name="momentDueToDeadLoad"
              value={inputs.momentDueToDeadLoad}
              onChange={handleChange}
            />
            <span className="unit">kN·m</span>
          </label>

          <label>
            Cracked Moment of Inertia
            <input
              type="number"
              name="crackedMomentInertia"
              value={inputs.crackedMomentInertia}
              onChange={handleChange}
            />
            <span className="unit">mm⁴</span>
          </label>
        </div>

        <div className="materialprops envset">
          <div className="title">
            <img src={envsetImg} alt="Environment Settings" />
            <span>Environment Settings</span>
          </div>

          <label>
            Exposure Factor (CE)
            <input
              type="number"
              name="exposure"
              value={inputs.exposure}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    </>
  );
};
