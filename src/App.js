import React,{useState} from "react";
import styled from "@emotion/styled";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import DragItem from "./drag-item";
import DropItem from "./drop-item";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SaveIcon from '@mui/icons-material/Save';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DnsSharpIcon from '@mui/icons-material/DnsSharp';
import weeveLogo from './assets/icons/weeve_logo.png'
// import { Link } from 'react-router-dom'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import ListItemText from '@material-ui/core/ListItemText'
// import EqualizerIcon from '@mui/icons-material/Equalizer';
import './App.css';

const menus = [{
  icon: '', 
  label: 'DATA SERVICES'
},{
  icon: '', 
  label: 'DESINER'
},{
  icon: '', 
  label: 'MODULE LIBRARY'
},{
  icon: '', 
  label: 'NODES'
},{
  icon: '', 
  label: 'DATA INSIGHTS'
}

]
const modules = {
  1: {text: "Some modules with a really long name",
      state: "module"},
  2: {text: "Module Name",
      state: "module"},
  3: {text: "Another Module Name",
      state: "module"},
  4: {text: "Some modules with a really long name",
      state: "module"},
  5: {text: "Module Name",
      state: "module"}
};


const newModules = [
  {id: 1, text: "Some modules with a really long name",
      state: "module"},
  {id: 2,text: "Module Name",
      state: "module"},
  {id: 3,text: "Another Module Name",
      state: "module"},
  {id: 4,text: "Some modules with a really long name",
      state: "module"},
  {id: 5,text: "Module Name",
      state: "module"}
]

  function App(){
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const [moduleValues, setValue] = useState(modules);
  const [filterIMValues, setIFilterValue] = useState(modules);
  const [pModuleValues, setPValue] = useState(modules);
  const [oModuleValues, setOValue] = useState(modules);

  const [inputModules, setInputModules] = useState(newModules);
  const [inputTargetModules, setTargetInputModules] = useState([]);
  const [filterInputModules, setFilterInputModules] = useState(newModules);
  const [processModules, setProcessModules] = useState(newModules);
  const [processTargetModules, setTargetProcessModules] = useState([]);
  const [filterProcessModules, setFilterProcessModules] = useState(newModules);
  const [outputModules, setOutputModules] = useState(newModules);
  const [outputTargetModules, setTargetOutputModules] = useState([]);
  const [filterOutputModules, setFilterOutputModules] = useState(newModules);
  
 const handleSearchForInputModule = e => {
   console.log(e.target.value)
   const iModules = inputModules.filter(m => m.text.toLocaleLowerCase().includes(e.target.value))
   setFilterInputModules(iModules)
 }

 const handleSearchForProcessModule = e => {
   if(e){
  console.log(e.target.value)
  const pModules = processModules.filter(m => m.text.toLocaleLowerCase().includes(e.target.value))
  setFilterProcessModules(pModules)
}
}
       
const handleSearchForOutputModule = e => {
  console.log(e.target.value)
  const oModules = outputModules.filter(m => m.text.toLocaleLowerCase().includes(e.target.value))
  setFilterOutputModules(oModules)
}
       
        
return (
  <div className="main_div">
    <div className="left_menu">
    <div className="left__row">
    <div className="logo__section"><img src={weeveLogo}  className="weeve__logo" alt="logo"/></div>
    </div>
    <div className="left__row">
      <div className="left__row"><div className="left__column">
      <div className="left__icon"><SortRoundedIcon/></div>
      <div className="left__text">DATA SERVICES</div>
      </div>
      <div className="left__column">
      <div className="left__icon__div"><CreateRoundedIcon/></div>
      <div className="left__text__div">DESIGNER</div>
      </div>
      <div className="left__column">
      <div className="left__icon"><CreateRoundedIcon/></div>
      <div className="left__text">MODULE LIBRARY</div>
      </div>
      <div className="left__column">
      <div className="left__icon"><DnsSharpIcon/></div>
      <div className="left__text">NODES</div>
      </div>
      <div className="left__column">
      <div className="left__icon"><BarChartOutlinedIcon/></div>
      <div className="left__text">DATA INSIGHTS</div>
      </div></div>
    </div>
    </div>
    <div className="right_div">
      <div className="nds_div"> 
     
        <TextField id ="outlined-basic"
          placeholder = "Please name your Data service"
          sx={{ width: 300  }}
          size="small"
          InputProps={{
            endAdornment: (
            <InputAdornment>
            <SaveIcon/>
            </InputAdornment>)
            }}
          />
       
      </div>

      <div className="task_div">  
        <div className="task_row">
          <div className="icon1_div"><PlayArrowIcon /></div>
        <div className="task_column">
          <div className="ip_grid_label">
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
              <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing} >
                  {[0].map((value) => (
                  <Grid key={value} item>
                    <Paper sx={{ height: 490, width: 270, backgroundColor:"#c2c2c2" }}>
                      <div className="input_div">INPUT</div>
                        <div className="ip_drop_div">
                       
                        <DropItem
                          
                        onDrop={(id) => {
                          console.log('currentModule >> id', id)
                          console.log(filterInputModules)
                        var currentModule= filterInputModules.filter(m => m.id == id)
                        console.log('currentModule', currentModule)
                        currentModule.state = "drop";
                        
                        setTargetInputModules(currentModule);
                        }}
                        >
                        {inputTargetModules && inputTargetModules.map(module => (
                          <DragItem id={module.id} data={module} key={module.id} />
                        ))}
                    
                        </DropItem>
                        </div>
                      <div className="src_div">
                        <TextField
                          placeholder="Search input Modules"
                          size="small"
                          onChange={e => handleSearchForInputModule(e)}
                          InputProps={{
                          startAdornment: (
                          <InputAdornment>
                          <SearchIcon />
                          </InputAdornment>)
                          }}
                        />
                      </div>
                      <div className="ip_module_div">
                      <DropItem
                     
                      onDrop={(id) => {
                      const currentModule = { ...moduleValues[id] };
                      currentModule.state = "module";
                      setFilterInputModules({ ...moduleValues, ...{ [id]: currentModule } });
                      }} container spacing={2}
                      >
                      {filterInputModules.map(module => (
                        <DragItem id={module.id} data={module} key={module.id} />
                      ))}
                     
                      </DropItem>
                    </div>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
        </div>
        <div className="icon2_div"><PlayArrowIcon /></div>
        <div className="task_column">
        <div className="pro_grid_label">
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={spacing}>
                {[1].map((value) => (
                  <Grid key={value} item>
                    <Paper sx={{ height: 490, width: 270,backgroundColor:"#e8e8e8" }}>
                      <div className="process_div">PROCESS</div>
                      <div className="pro_drop_div">
                      <DropItem
                          
                      onDrop={(id) => {
                        console.log('currentModule >> id', id)
                        console.log(filterProcessModules)
                      var currentModule= filterProcessModules.filter(m => m.id == id)
                      console.log('currentModule', currentModule)
                      if(currentModule.length > 0){
                      currentModule.state = "drop";
                      var processModule = processTargetModules
                      processModule.push(currentModule[0])
                      
                      console.log('processModule', processModule)
                      setTargetProcessModules(processModule);
                      handleSearchForProcessModule(null)
                      }
                      }}
                      >
                      {processTargetModules && processTargetModules.map(module => (
                        <DragItem id={module.id} data={module} key={module.id} />
                      ))}
                  
                      </DropItem>
                      </div>
                    <div className="src_div">
                      <TextField
                        placeholder="Search input Modules"
                        size="small"
                        onChange={e => handleSearchForProcessModule(e)}
                        InputProps={{
                        startAdornment: (
                        <InputAdornment>
                        <SearchIcon />
                        </InputAdornment>)
                        }}
                      />
                    </div>
                    <div className="pro_module_div">
                    <DropItem
                   
                    onDrop={(id) => {
                    const currentModule = { ...moduleValues[id] };
                    currentModule.state = "module";
                    setFilterProcessModules({ ...moduleValues, ...{ [id]: currentModule } });
                    }}
                    >
                    {filterProcessModules.map(module => (
                      <DragItem id={module.id} data={module} key={module.id} />
                    ))}
                   
                    </DropItem>
                    </div>
                    </Paper>
                  </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </div>
          </div>
          <div className="icon3_div"><PlayArrowIcon /></div>
          <div className="task_column">
          <div className="op_grid_label">
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
              <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
                    {[2].map((value) => (
                    <Grid key={value} item>
                    <Paper sx={{ height: 490, width: 270,backgroundColor:"#e8e8e8" }}>
                      <div className="output_div">OUTPUT</div>
                      <div className="op_drop_div">
                      <DropItem
                          
                      onDrop={(id) => {
                        console.log('currentModule >> id', id)
                        console.log(filterOutputModules)
                      var currentModule= filterOutputModules.filter(m => m.id == id)
                      console.log('currentModule', currentModule)
                      currentModule.state = "drop";
                      
                      setTargetOutputModules( currentModule);
                      }}
                      >
                      {outputTargetModules && outputTargetModules.map(module => (
                        <DragItem id={module.id} data={module} key={module.id} />
                      ))}
                  
                      </DropItem>
                      </div>
                      <div className="src_div">
                        <TextField
                        placeholder="Search input Modules"
                        size="small"
                        onChange={e => handleSearchForOutputModule(e)}
                        InputProps={{
                        startAdornment: (
                        <InputAdornment>
                        <SearchIcon />
                        </InputAdornment>)
                        }}
                        />
                      </div>
                      <div className="op_module_div">
                      <DropItem
                      
                      onDrop={(id) => {
                      const currentModule = { ...moduleValues[id] };
                      currentModule.state = "module";
                      setFilterOutputModules({ ...moduleValues, ...{ [id]: currentModule } });
                      }}
                      >
                      {filterOutputModules.map(module => (
                        <DragItem id={module.id} data={module} key={module.id} />
                      ))}
                     
                      </DropItem></div>
                    </Paper>
                  </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

   
    
   
            

    
        
  
export default App;
  