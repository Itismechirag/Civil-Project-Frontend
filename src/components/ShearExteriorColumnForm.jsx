import React from "react";
import materialImg from '../assets/material.png';
import geodetImg from '../assets/geodetail.png';
import loaddetImg from '../assets/loaddet.png';
import envsetImg from '../assets/envset.png';
import './Homepage.css';

export const ExteriorColumnShearForm = ({ inputs, handleChange }) => {
  return (
    <>
      <div className="materialprops">
        <div className="title">
          <img src={materialImg} alt="Material Properties" />
          <span>Material Properties</span>
        </div>

        <label>
          Ultimate Strength of Fibre
          <input
            type="number"
            name="ultimateStrength"
            value={inputs.ultimateStrength}
            onChange={handleChange}
          />
          <span className="unit">MPa</span>
        </label>

        <label>
          Ultimate Strain of Fibre
          <input
            type="number"
            name="ultimateStrain"
            value={inputs.ultimateStrain}
            onChange={handleChange}
          />
        </label>

        <label>
          Modulus of Elasticity of Fibre
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
          Column Diameter
          <input
            type="number"
            name="columnDiameter"
            value={inputs.columnDiameter}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Width of Each Sheet
          <input
            type="number"
            name="sheetWidth"
            value={inputs.sheetWidth}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Spacing Between Sheets
          <input
            type="number"
            name="sheetSpacing"
            value={inputs.sheetSpacing}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Thickness per Ply
          <input
            type="number"
            name="plyThickness"
            value={inputs.plyThickness}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>
      </div>

      <div>
        <div className="materialprops loaddet">
          <div className="title">
            <img src={loaddetImg} alt="Loading Details" />
            <span>Loading Details</span>
          </div>

          <label>
            Additional Shear Strength Required
            <input
              type="number"
              name="shearStrengthRequired"
              value={inputs.shearStrengthRequired}
              onChange={handleChange}
            />
            <span className="unit">kN</span>
          </label>
        </div>

        <div className="materialprops envset">
          <div className="title">
            <img src={envsetImg} alt="Environment Settings" />
            <span>Environment Settings</span>
          </div>

          <label>
            Exposure Condition
            <input
              type="number"
              name="exposure"
              value={inputs.exposure}
              onChange={handleChange}
            />
            {/* You can later map this to corresponding C_e values */}
          </label>
        </div>
      </div>
    </>
  );
};
