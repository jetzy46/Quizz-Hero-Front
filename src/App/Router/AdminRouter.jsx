import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginAdmin, AdminDashboard, CreateQuestion, EditQuestion, SearchQuestions } from "../index";

const AdminRouter = () => {
  <Routes>
    <Route path="/admin" exact component={LoginAdmin} />
    {/* Dashboard */}
    <Route path="/admin/dashboard" exact component={AdminDashboard} />
    {/*  Questions */}
    <Route path="/admin/questions/create" component={CreateQuestion} />
    <Route path="/admin/questions/edit/:id" component={EditQuestion} />
    <Route path="/admin/questions" exact component={SearchQuestions} />
  </Routes>;
};

export default AdminRouter;
