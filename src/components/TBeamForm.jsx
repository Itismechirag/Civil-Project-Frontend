import React, { useState } from "react";
import materialImg from '../assets/material.png';
import geodetImg from '../assets/geodetail.png';
import loaddetImg from '../assets/loaddet.png';
import envsetImg from '../assets/envset.png';
import './Homepage.css';

export const TBeamShearForm = ({ inputs, handleChange }) => {
  return (
    <>
      <div className="materialprops">
        <div className="title">
          <img src={materialImg} alt="Material Properties" />
          <span>Material Properties</span>
        </div>

        <label>
          Thickness per Ply (t_f)
          <input
            type="number"
            name="thicknessPerPly"
            value={inputs.thicknessPerPly}
            onChange={handleChange}
            step="0.001"
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Ultimate Tensile Strength (f_fu)
          <input
            type="number"
            name="ultimateTensileStrength"
            value={inputs.ultimateTensileStrength}
            onChange={handleChange}
          />
          <span className="unit">N/mm²</span>
        </label>

        <label>
          Rupture Strain (epsilon_fu)
          <input
            type="number"
            name="ruptureStrain"
            value={inputs.ruptureStrain}
            onChange={handleChange}
            step="0.0001"
          />
        </label>

        <label>
          Modulus of Elasticity (E_f)
          <input
            type="number"
            name="modulusOfElasticity"
            value={inputs.modulusOfElasticity}
            onChange={handleChange}
          />
          <span className="unit">N/mm²</span>
        </label>
      </div>

      <div className="materialprops geodet">
        <div className="title">
          <img src={geodetImg} alt="Geometric Details" />
          <span>Geometric Details</span>
        </div>

        <label>
          Effective Depth of T-beam (d)
          <input
            type="number"
            name="effectiveDepth"
            value={inputs.effectiveDepth}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Width of T-beam (b_w)
          <input
            type="number"
            name="widthOfTBeam"
            value={inputs.widthOfTBeam}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Effective Depth of FRP (d_fv)
          <input
            type="number"
            name="effectiveDepthFRP"
            value={inputs.effectiveDepthFRP}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Width of Each Sheet (w_f)
          <input
            type="number"
            name="widthOfSheet"
            value={inputs.widthOfSheet}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Span Between Sheets (s_f)
          <input
            type="number"
            name="spanBetweenSheets"
            value={inputs.spanBetweenSheets}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          FRP Strip Length (l_FRP)
          <input
            type="number"
            name="frpStripLength"
            value={inputs.frpStripLength}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>
      </div>

      <div>
        <div className="materialprops loaddet">
          <div className="title">
            <img src={loaddetImg} alt="Loading Details" />
            <span>Load Details</span>
          </div>

          <label>
            Shear Strength by Concrete (V_c)
            <input
              type="number"
              name="shearStrengthConcrete"
              value={inputs.shearStrengthConcrete}
              onChange={handleChange}
            />
            <span className="unit">N</span>
          </label>

          <label>
            Shear Strength by Steel (V_s)
            <input
              type="number"
              name="shearStrengthSteel"
              value={inputs.shearStrengthSteel}
              onChange={handleChange}
            />
            <span className="unit">N</span>
          </label>

          <label>
            Required Shear Strength (V_u)
            <input
              type="number"
              name="requiredShearStrength"
              value={inputs.requiredShearStrength}
              onChange={handleChange}
            />
            <span className="unit">N</span>
          </label>

          <label>
            Wrap Type (1=Complete, 2=U-wrap)
            <input
              type="number"
              name="wrapType"
              value={inputs.wrapType}
              onChange={handleChange}
              min="1"
              max="2"
            />
          </label>
        </div>

        <div className="materialprops envset">
          <div className="title">
            <img src={envsetImg} alt="Environment Settings" />
            <span>Environment Settings</span>
          </div>

          <label>
            Environmental Reduction Factor (C_e)
            <input
              type="number"
              name="envReductionFactor"
              value={inputs.envReductionFactor}
              onChange={handleChange}
              step="0.01"
            />
          </label>
        </div>
      </div>
    </>
  );
};