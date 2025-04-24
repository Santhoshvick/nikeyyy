package com.fp;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/welcome")
public class forgotPassword extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String name="postgres";
		String password="tiger";
		String url="jdbc:postgresql://localhost:5432/loginpage";
	
		try {
			Class.forName("org.postgresql.Driver");
			
			Connection con=DriverManager.getConnection(url,name,password);
			
			
			String email2=req.getParameter("mail");
			String password2=req.getParameter("pass");
			 Statement stmt=con.createStatement();
			 
			 String query2 = "UPDATE shoe SET password='" + password2 + "' WHERE email='" + email2 + "'";

			 int result=stmt.executeUpdate(query2);
			 if(result>0)
			 {
				 resp.sendRedirect("signin.html");
			 }
			 else
			 {
				 resp.sendRedirect("forgot.html");
			 }
			 
			 

			con.close();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			 resp.getWriter().println("SQL Error: " + e.getMessage());
			e.printStackTrace();
		}
	}
}
