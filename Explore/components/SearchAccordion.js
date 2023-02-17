import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AltCause from './AltCause';
import CharitySearch from './CharitySearch';


function SearchAccordion({setSearch, search, searchResults, setSearchResults}) {
  return (
    <div>
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
                    search={search} filter={'Organization'} />
        </AccordionDetails>
      </Accordion>
    <AltCause searchResults={searchResults} search={search} setSearch={setSearch} setSearchResults={setSearchResults} />
       
    </div>
  );
};

export default SearchAccordion;