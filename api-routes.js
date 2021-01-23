// New cases & deaths, cumulative cases & deaths by date
`https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={"date":"date", "newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}`;

// New cases & deaths by region for specific date (use for today)
`https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=utla;date=2021-01-17&structure={"date":"date","newCases":"newCasesByPublishDate","region":"areaName"}`;
