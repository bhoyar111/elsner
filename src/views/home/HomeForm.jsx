import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const Home = () => {
    return (
        <CRow>
            <CCol sm="6" lg="3">
                <CWidgetDropdown
                    color="gradient-primary"
                    header="9.823"
                    text="Members online"
                    footerSlot={
                    <ChartLineSimple
                        pointed
                        className="c-chart-wrapper mt-3 mx-3"
                        style={{height: '70px'}}
                        dataPoints={[65, 59, 84, 84, 51, 55, 40]}
                        pointHoverBackgroundColor="primary"
                        label="Members"
                        labels="months"
                    />
                    }
                >
            <CDropdown>
                <CDropdownToggle color="transparent">
                <CIcon name="cil-settings"/>
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
            </CDropdown>
            </CWidgetDropdown>
        </CCol>            

        <CCol sm="6" lg="3">
            <CWidgetDropdown
                color="gradient-danger"
                header="9.823"
                text="Members online"
                footerSlot={
                    <ChartBarSimple
                    className="mt-3 mx-3"
                    style={{height: '70px'}}
                    backgroundColor="rgb(250, 152, 152)"
                    label="Members"
                    labels="months"
                    />
                }
            >
            <CDropdown>
                <CDropdownToggle caret className="text-white" color="transparent">
                <CIcon name="cil-settings"/>
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
            </CDropdown>
            </CWidgetDropdown>
        </CCol>
        </CRow>
    )
}

export default Home;
