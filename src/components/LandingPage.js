import React, { Fragment } from "react";
import "./master.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ReactSearchBox from "react-search-box";
import Lightbox from "react-image-lightbox";
import * as sampledata from './samplejson/sampledata.json';
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      inputData: [],
      actual:  sessionStorage.getItem("key"),
      isOpen: false,
      valueSearched: "",
      currentIdImg: "",
    };
    this.thumbnailClicked = this.thumbnailClicked.bind(this);
    this.searchinput = this.searchinput.bind(this);
    this.dropDownChange = this.dropDownChange.bind(this);
  }

  async componentDidMount() {
    
    await fetch("http://localhost:4000/api/customers", {
      header: {
        "access-control-allow-origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let _data = data;
        // console.log("<====_data====>", JSON.stringify(_data));       
        this.setState({ inputData:  _data.slice(0, 5), actual: _data });
        this.setSessionStorage(_data.slice(0, 5));
      })
      .catch((response) => response.json());
  }

  setSessionStorage = (e) => {
    sessionStorage.setItem("_key", e);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  dropDownChange(record) {
    //console.log("record+> ", JSON.stringify(record));
    //console.log("record+> ", record);   
    let _temp = this.state.actual;
    this.setState({ inputData: _temp.slice(0, record.label) });
    this.setSessionStorage(_temp.slice(0, record.label));
  }

  thumbnailClicked(index) {
    // let _temp = this.state.actual;
    //console.log("_index  ", index.currentTarget.id);
    this.setState({ isOpen: true, currentIdImg: index.currentTarget.id });
  }

  onlyAlphabets(e) {
    return (
      (e.charCode > 64 && e.charCode < 91) ||
      (e.charCode > 96 && e.charCode < 123) ||
      e.charCode == 32
    );
  }
  searchinput(record) {
    // if(!this.onlyAlphabets(record)) return ;
     //console.log("record+> ", record);
     let _temp = this.state.actual;
      _temp =_temp.filter((a) => a.userName.includes(record));
    
    this.setState({
      inputData: _temp.slice(0, 5),
    });
    this.setSessionStorage(_temp.slice(0, 5));
  }

  render() {
    const heading = [
      { title: "Picture" },
      { title: "FullName" },
      { title: "UserName" },
      { title: "Email" },
    ];

    const options = ["3", "6"];
    const defaultOption = options[0];
    return (
      <div>
        {this.state.isOpen && (
          <Lightbox
            onCloseRequest={() => {
              this.setState({ isOpen: false,currentIdImg:'' });
            }}
            mainSrc={this.state.currentIdImg}
          />
        )}
        <div className="topnav" id="myTopnav">
          <a href="#123">Companay Name</a>
        </div>
        <div className="centre">
        <div className="w3-row w3-border">
          <div className="w3-container w3-half">
            <ReactSearchBox
              placeholder="Search..."
              value={this.state.valueSearched}
              inputFontSize="5"
              inputFontColor="red"
              clearOnSelect={true}
              data={this.state.inputData}
            
              onChange={(e) => {
                this.searchinput(e);
              }}
              leftIcon={<>🔍</>}
            />
            <div className="w3-container w3-half w3-red"></div>{" "}
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                {heading.map((item, i) => {
                  return (
                    <Fragment>
                      <th>{item.title}</th>
                    </Fragment>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {this.state.inputData.map((item, i) => {
                return (
                  <Fragment>
                    <tr key={i}>
                      <td>
                        <img
                          className="thumbnail"
                          alt=""
                          src={item.picture}
                          id={item.picture}
                          onClick={(i) => this.thumbnailClicked(i)}
                        />
                      </td>
                      <td>{item.fullName}</td>
                      <td>{item.userName}</td>
                      <td>{item.email}</td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
          <div className="row">
            <div className="columnsort">
              <label>Show</label>
            </div>
            <div className="column">
              <Dropdown
                options={options}
                onChange={(e) => {
                  this.dropDownChange(e);
                }}
                value={defaultOption}
                placeholder="Select an option"
              />
            </div>
            <div className="column"></div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default LandingPage;
