import React, {useState} from "react";
import materialImg from '../assets/material.png'
import geodetImg from '../assets/geodetail.png'
import loaddetImg from '../assets/loaddet.png'
import envsetImg from '../assets/envset.png'
import './Homepage.css'

export const SlabRetroForm = ({inputs, handleChange}) => {
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
          Thickness to Slab
          <input
            type="number"
            name="thicknessToSlab"
            value={inputs.thicknessToSlab}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Cover to Slab
          <input
            type="number"
            name="coverToSlab"
            value={inputs.coverToSlab}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Diameter of Bar Provided
          <input
            type="number"
            name="diameterOfBarProvided"
            value={inputs.diameterOfBarProvided}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Spacing of Bar Provided
          <input
            type="number"
            name="spacingOfBarProvided"
            value={inputs.spacingOfBarProvided}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Number of Fibre Ply N
          <input
            type="number"
            name="numberOfFibrePly"
            value={inputs.numberOfFibrePly}
            onChange={handleChange}
          />
        </label>

        <label>
          Width of Fibre
          <input
            type="number"
            name="widthOfFibre"
            value={inputs.widthOfFibre}
            onChange={handleChange}
          />
          <span className="unit">mm</span>
        </label>

        <label>
          Thickness of Fibre
          <input
            type="number"
            name="thicknessOfFibre"
            value={inputs.thicknessOfFibre}
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
            New Design Moment
            <input
              type="number"
              name="newDesignMoment"
              value={inputs.newDesignMoment}
              onChange={handleChange}
            />
            <span className="unit">kNm</span>
          </label>

          <label>
            Moment due to Dead Load
            <input
              type="number"
              name="momentDueToDeadLoad"
              value={inputs.momentDueToDeadLoad}
              onChange={handleChange}
            />
            <span className="unit">kNm</span>
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
              type="text"
              name="exposureCondition"
              value={inputs.exposureCondition}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    </>
  )
}
