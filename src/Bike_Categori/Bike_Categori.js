

import React, { useState, useEffect, useContext, useRef } from "react"
import Himo from '../assets/Himo_High.svg'
import Battery from '../assets/material-symbols_battery-full-alt.svg'
import plug from '../assets/material-symbols_power-plug.svg'
import gogo from '../assets/material-symbols_speed.svg'
import water from '../assets/mdi_water-off.svg'
import Bike from '../assets/bike.svg'

import { AiOutlineRight } from "react-icons/ai";

//AiOutlineRight
const Bike_Categori = function () {


  return (


    <>
      <div style={{
        width: '100 %',
        height: '50vh',

        position: 'relative',

      }}>
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'


          }}
          src={Himo}
          title='good'
        />
        <p style={{
          fontSize: '40px',
          fontWeight: 'bold',
          position: 'absolute',
          top: '40%',
          color: 'white',
          right: '10%'
        }}> Himo High -Quality E-bike</p>

      </div>

      <div style={{
        width: '100%',
        height: '20vh',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <p style={{
          fontWeight: 'bold',
          fontSize: '35px'
        }}>
          Himo High -Quality E-bike
        </p>

      </div>
      <div style={{
        width: '100%',
        height: '60vh',
        marginBottom: '30px',

        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px'
      }}>
        <div style={{
          width: '80%',
          height: '100%',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row'
        }}>

          <div style={{
            width: '40%',
            height: '100%',

            display: 'flex',
            flexDirection: 'column'
          }}>
            <p style={{
              fontWeight: 'bold',
              fontSize: '30px',
              margin: '5px'
            }}>
              20inch Folding

            </p>
            <p style={{
              fontWeight: 'bold',
              fontSize: '30px',
              margin: '5px'
            }}>
              EBike
            </p>
            <p style={{
              fontSize: '15px',
              fontWeight: '600'
            }}>
              HIMO Cost-Effective E-bike
            </p>
            <div style={{
              width: '70%',
              height: '10%',

              display: 'flex',

            }}>
              <p
                style={{
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  fontWeight: '600',

                  fontSize: '15px',

                }}

              >choice of most people, this models meet a wide range of life scenarios:</p>


            </div>
            <div style={{

              width: '70%',
              height: '55%',
              marginTop: '10%',

              display: 'flex',
              flexDirection: 'column'

            }}>
              <div style={{
                width: '100%',
                height: '50%',
                background: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '40%',
                  height: '90px',

                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',

                }}>
                  <div style={{
                    width: '50%',
                    height: '50%'
                  }}>


                    <img
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'


                      }}
                      src={Battery}
                      title='good'
                    />
                  </div>
                  <p
                    style={{
                      margin: '5px',
                      fontSize: '13px',
                      fontWeight: '500'

                    }}

                  >80KM
                  </p>
                  <p style={{
                    margin: '5px',
                    fontSize: '13px',
                    fontWeight: '500'

                  }}>
                    MaxRange
                  </p>



                </div>
                <div style={{
                  width: '40%',
                  height: '90px',

                  display: 'flex',
                  flexDirection: 'column'

                }}>
                  <div style={{
                    width: '50%',
                    height: '50%'
                  }}>

                    <img
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'


                      }}
                      src={plug}
                      title='good'
                    />
                  </div>
                  <p
                    style={{
                      margin: '5px',
                      fontSize: '13px',
                      fontWeight: '500'

                    }}

                  >

                    250W

                  </p>
                  <p style={{
                    margin: '5px',
                    fontSize: '13px',
                    fontWeight: '500'

                  }}>
                    MotorPower
                  </p>
                </div>

              </div>

              <div style={{

                width: '100%',
                height: '55%',

                display: 'flex',


              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'white',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '40%',
                    height: '90px',

                    display: 'flex',
                    flexDirection: 'column'

                  }}>
                    <img
                      style={{
                        width: '50%',
                        height: '50%',
                        objectFit: 'cover'


                      }}
                      src={gogo}
                      title='good'
                    />
                    <p
                      style={{
                        margin: '5px',
                        fontSize: '13px',
                        fontWeight: '500'

                      }}

                    >80KM
                    </p>
                    <p style={{
                      margin: '5px',
                      fontSize: '13px',
                      fontWeight: '500'

                    }}>
                      MaxRange
                    </p>
                  </div>
                  <div style={{
                    width: '40%',
                    height: '90px',

                    display: 'flex',

                    flexDirection: 'column'
                  }}>
                    <div style={{
                      width: '50%',
                      height: '50%'
                    }}>

                      <img
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'


                        }}
                        src={water}
                        title='good'
                      />
                    </div>
                    <p
                      style={{
                        margin: '5px',
                        fontSize: '13px',
                        fontWeight: '500'

                      }}

                    >80KM
                    </p>
                    <p style={{
                      margin: '5px',
                      fontSize: '13px',
                      fontWeight: '500'

                    }}>
                      MaxRange
                    </p>
                  </div>

                </div>


              </div>
            </div>


          </div>


          <div style={{
            width: '70%',
            height: '100%',

            display: 'flex',
            justifyContent: 'space-between'
          }}>


            <div style={{
              width: '45%',
              height: '100%',
              backgroundColor: 'white',
              borderColor: 'black',
              borderStyle: 'solid',
              borderWidth: '1.5px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                width: '100%',
                height: '75%',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img
                  style={{
                    width: '100%',
                    height: '80%',
                    // objectFit: 'cover'


                  }}
                  src={Bike}></img>
              </div>
              <div style={{
                width: '100%',
                height: '40%',

                display: 'flex',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '80%',
                  height: '100%',

                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: '600'
                  }}>
                    Himo Z20 Folding EBike
                  </p>
                  <p style={{
                    marginTop: '5px',
                    fontWeight: '600',
                    fontSize: '15px'

                  }}>
                    Color
                  </p>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                  }}>


                    <div style={{
                      width: '50px',
                      height: '20px',
                      backgroundColor: 'black',
                      borderRadius: '20px'
                    }}>

                    </div>
                    <div style={{
                      width: '50px',
                      height: '20px',
                      backgroundColor: 'white'
                      ,
                      borderColor: 'black'
                      , borderStyle: 'solid',
                      borderWidth: '1px',
                      marginLeft: '20px',
                      borderRadius: '20px'
                    }}>

                    </div>


                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignContent: 'center',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <p style={{
                      margin: 0,
                      fontSize: '13px',
                      fontWeight: '600',
                      marginRight: '10px'
                    }}> View Detail</p>
                    <AiOutlineRight></AiOutlineRight>
                  </div>

                </div>

              </div>

            </div>







            <div style={{
              width: '45%',
              height: '100%',
              backgroundColor: 'black',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                width: '100%',
                height: '75%',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img
                  style={{
                    width: '100%',
                    height: '80%',


                  }}
                  src={Bike}></img>
              </div>
              <div style={{
                width: '100%',
                height: '40%',

                display: 'flex',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '80%',
                  height: '100%',

                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'white'
                  }}>
                    Himo Z20 Folding EBike
                  </p>
                  <p style={{
                    marginTop: '5px',
                    fontWeight: '600',
                    fontSize: '15px',
                    color: 'white'
                  }}>
                    Color
                  </p>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                  }}>


                    <div style={{
                      width: '50px',
                      height: '20px',
                      backgroundColor: 'black',
                      borderRadius: '20px',
                      borderWidth: '1.5px',
                      borderStyle: 'solid'
                      , borderColor: 'white'
                    }}>

                    </div>
                    <div style={{
                      width: '50px',
                      height: '20px',
                      backgroundColor: 'white'
                      ,
                      borderColor: 'black'
                      , borderStyle: 'solid',
                      borderWidth: '1px',
                      marginLeft: '20px',
                      borderRadius: '20px'
                    }}>

                    </div>


                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignContent: 'center',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <p style={{
                      margin: 0,
                      fontSize: '13px',
                      fontWeight: '600',
                      marginRight: '10px',
                      color: 'white'
                    }}> View Detail</p>
                    <AiOutlineRight
                      style={{ color: 'white' }}

                    ></AiOutlineRight>
                  </div>

                </div>

              </div>













            </div>


          </div>





        </div>


      </div>
      <div style={{
        width: '100%',
        height: '60vh',
        backgroundColor: 'gold'
      }}>


      </div>



    </>

  )


}

export default Bike_Categori;
