import React from "react";
import materialImg from '../assets/material.png'
import geodetImg from '../assets/geodetail.png'
import loaddetImg from '../assets/loaddet.png'
import envsetImg from '../assets/envset.png'
import './Homepage.css'

export const NonCircularColumnForm = ({ inputs, handleChange }) => {
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
                        name="f_c_spec"
                        value={inputs.f_c_spec}
                        onChange={handleChange}
                    />
                    <span className="unit">MPa</span>
                </label>

                <label>
                    Grade of Steel
                    <input
                        type="number"
                        name="f_y"
                        value={inputs.f_y}
                        onChange={handleChange}
                    />
                    <span className="unit">MPa</span>
                </label>

                <label>
                    Ultimate Fibre Strength
                    <input
                        type="number"
                        name="f_fu"
                        value={inputs.f_fu}
                        onChange={handleChange}
                    />
                    <span className="unit">MPa</span>
                </label>

                <label>
                    Ultimate Fibre Strain
                    <input
                        type="number"
                        name="epsilon_fu"
                        value={inputs.epsilon_fu}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Modulus of Elasticity of Fibre
                    <div className="elasticity">
                        <input
                            type="number"
                            name="E_f_base"
                            value={inputs.E_f_base}
                            onChange={handleChange}
                        />
                        <span>x10^</span>
                        <input
                            type="number"
                            name="E_f_exp"
                            value={inputs.E_f_exp}
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
                    Column Width (b)
                    <input
                        type="number"
                        name="b"
                        value={inputs.b}
                        onChange={handleChange}
                    />
                    <span className="unit">mm</span>
                </label>

                <label>
                    Column Depth (h)
                    <input
                        type="number"
                        name="h"
                        value={inputs.h}
                        onChange={handleChange}
                    />
                    <span className="unit">mm</span>
                </label>

                <label>
                    Corner Radius (r_c)
                    <input
                        type="number"
                        name="r_c"
                        value={inputs.r_c}
                        onChange={handleChange}
                    />
                    <span className="unit">mm</span>
                </label>

                <label>
                    Number of Steel Bars
                    <input
                        type="number"
                        name="n_bar"
                        value={inputs.n_bar}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Diameter of Bar
                    <input
                        type="number"
                        name="d_bar"
                        value={inputs.d_bar}
                        onChange={handleChange}
                    />
                    <span className="unit">mm</span>
                </label>

                <label>
                    Thickness per Fibre Ply
                    <input
                        type="number"
                        name="t_f"
                        value={inputs.t_f}
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
                        Initial Axial Load
                        <input
                            type="number"
                            name="P_n_initial"
                            value={inputs.P_n_initial}
                            onChange={handleChange}
                        />
                        <span className="unit">N</span>
                    </label>

                    <label>
                        Required Axial Load After FRP
                        <input
                            type="number"
                            name="P_n_frp_required"
                            value={inputs.P_n_frp_required}
                            onChange={handleChange}
                        />
                        <span className="unit">N</span>
                    </label>
                </div>

                <div className="materialprops envset">
                    <div className="title">
                        <img src={envsetImg} alt="Environment Settings" />
                        <span>Environment Settings</span>
                    </div>

                    <label>
                        Environmental Reduction Factor
                        <input
                            type="number"
                            step="0.01"
                            name="C_e"
                            value={inputs.C_e}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            </div>
        </>
    );
};
