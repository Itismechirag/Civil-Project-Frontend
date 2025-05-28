import React from "react";
import materialImg from '../assets/material.png'
import geodetImg from '../assets/geodetail.png'
import loaddetImg from '../assets/loaddet.png'
import envsetImg from '../assets/envset.png'
import './Homepage.css'

export const RCBeamForm = ({ inputs, handleChange }) => {
    return (
        <>
            <div className="materialprops">
                <div className="title">
                    <img src={materialImg} alt="Material Properties" />
                    <span>Material Properties</span>
                </div>

                <label>
                    Compressive Strength of Concrete
                    <input type="number" name="f_c_dash" value={inputs.f_c_dash} onChange={handleChange} />
                    <span className="unit">MPa</span>
                </label>


                <label>
                    Ultimate Tensile Strength (f<sub>fu*</sub>)
                    <input type="number" name="f_fu_star" value={inputs.f_fu_star} onChange={handleChange} />
                    <span className="unit">MPa</span>
                </label>

                <label>
                    Rupture Strain (ε<sub>fu*</sub>)
                    <input type="number" name="Eps_fu_star" value={inputs.Eps_fu_star} onChange={handleChange} />
                </label>

                <label>
                    Modulus of Elasticity of FRP (E<sub>f</sub>)
                    <input type="number" name="E_f" value={inputs.E_f} onChange={handleChange} />
                    <span className="unit">GPa</span>
                </label>

                <label>
                    Modulus of Elasticity of Steel (E<sub>s</sub>)
                    <input type="number" name="E_s" value={inputs.E_s} onChange={handleChange} />
                    <span className="unit">GPa</span>
                </label>

                <label>
                    Yield Strength of Steel (f<sub>y</sub>)
                    <input type="number" name="f_y" value={inputs.f_y} onChange={handleChange} />
                    <span className="unit">GPa</span>
                </label>

                <label>
                    Environmental Reduction Factor (C<sub>E</sub>)
                    <input type="number" name="C_E" value={inputs.C_E} onChange={handleChange} />
                </label>
            </div>

            <div className="materialprops geodet">
                <div className="title">
                    <img src={geodetImg} alt="Geometric Details" />
                    <span>Geometric Details</span>
                </div>

                <label>
                    Length of Beam (l)
                    <input type="number" name="l" value={inputs.l} onChange={handleChange} />
                    <span className="unit">m</span>
                </label>

                <label>
                    Bay Width (l₂)
                    <input type="number" name="l_2" value={inputs.l_2} onChange={handleChange} />
                    <span className="unit">m</span>
                </label>

                <label>
                    Area of One Bar (A)
                    <input type="number" name="A" value={inputs.A} onChange={handleChange} />
                    <span className="unit">mm²</span>
                </label>

                <label>
                    Width of Beam (w)
                    <input type="number" name="w" value={inputs.w} onChange={handleChange} />
                    <span className="unit">mm</span>
                </label>

                <label>
                    Effective Depth of FRP (d<sub>f</sub>)
                    <input type="number" name="d_f" value={inputs.d_f} onChange={handleChange} />
                    <span className="unit">mm</span>
                </label>

                <label>
                    Effective Depth of Steel (d)
                    <input type="number" name="d" value={inputs.d} onChange={handleChange} />
                    <span className="unit">mm</span>
                </label>

                <label>
                    Beam Width for Flexure (b)
                    <input type="number" name="b" value={inputs.b} onChange={handleChange} />
                    <span className="unit">mm</span>
                </label>
            </div>

            <div className="materialprops loaddet">
                <div className="title">
                    <img src={loaddetImg} alt="Loading Details" />
                    <span>Loading Details</span>
                </div>

                <label>
                    Moment due to Dead Load (M<sub>DL</sub>)
                    <input type="number" name="M_DL" value={inputs.M_DL} onChange={handleChange} />
                    <span className="unit">kNm</span>
                </label>

                <label>
                    Cracked Moment of Inertia
                    <input type="number" name="I_cr" value={inputs.I_cr} onChange={handleChange} />
                    <span className="unit">mm⁴</span>
                </label>

                <label>
                    k (Neutral Axis Ratio)
                    <input type="number" name="k" value={inputs.k} onChange={handleChange} />
                </label>

                <label>
                    K<sub>m</sub> (Bond Coefficient)
                    <input type="number" name="K_m" value={inputs.K_m} onChange={handleChange} />
                </label>

                <label>
                    Eps<sub>fd</sub> (Debonding Strain)
                    <input type="number" name="Eps_fd" value={inputs.Eps_fd} onChange={handleChange} />
                </label>
            </div>
        </>
    );
};
