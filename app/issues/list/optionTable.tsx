"use client";
import { Issue } from "@prisma/client";
import { useState } from "react";
import IssueActions from "./IssueActions";
import IssueTable, { IssueQuery } from "./IssueTable";

interface Props {
  searchParams: IssueQuery;
  issues: Issue[];
}
const OptionTable = ({ searchParams, issues }: Props) => {
  const [isIssue, setIsIssue] = useState(false);
  const handleClick = () => setIsIssue((prev) => !prev);
  return (
    <>
      <IssueActions handleClick={handleClick} />
      {isIssue ? (
        <IssueTable searchParams={searchParams} issues={issues} />
      ) : (
        <IssueTable searchParams={searchParams} issues={issues} />
      )}
    </>
  );
};
export default OptionTable;
