import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AltCause from './AltCause';
import CharitySearch from './CharitySearch';


function SearchAccordion({setSearch, search, searchResults, setSearchResults, setOrgs, setCause, cause}) {
  let [isExpand, setIsExpand] = useState(true);

  return (
    <div style={{position: 'relative', left: '13.5%'}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Search By Organization</Typography>
        </AccordionSummary>
              <AccordionDetails>
          <CharitySearch setSearch={setSearch} setSearchResults={setSearchResults}
            search={search} setOrgs={setOrgs} setIsExpand={setIsExpand} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={isExpand}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => setIsExpand(!isExpand)}
        >
          <Typography>Search By Cause</Typography>
        </AccordionSummary>
              <AccordionDetails>
          <AltCause searchResults={searchResults} search={search}
            setSearch={setSearch} setSearchResults={setSearchResults}
            setCause={setCause} cause={cause} setOrgs={setOrgs} setIsExpand={setIsExpand} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SearchAccordion;