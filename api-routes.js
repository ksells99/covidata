// New cases & deaths, cumulative cases & deaths by date
`https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={"date":"date", "newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}`;

// New cases & deaths by region, for latest available date
`https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=utla&latestBy=date&structure={"date":"date","newCases":"newCasesByPublishDate","newDeaths":"newDeaths28DaysByPublishDate","region":"areaName"}`;
