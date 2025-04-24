package com.landingpage;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/signup")
public class detailsPage extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		String name="postgres";
		String password="tiger";
		String url="jdbc:postgresql://localhost:5432/loginpage";
	
		try {
			Class.forName("org.postgresql.Driver");
			
			Connection con=DriverManager.getConnection(url,name,password);
			
			String query1="INSERT INTO SHOE VALUES(?,?,?)";
			
			PreparedStatement ps=con.prepareStatement(query1);
			
			String ename1=req.getParameter("uname");
			String email1=req.getParameter("umail");
			String password1=req.getParameter("upass");
			
			ps.setString(1,ename1);
			ps.setString(2,email1);
			ps.setString(3,password1);
			
			ps.execute();
			resp.sendRedirect("signin.html");		
			
//           
			
			
			
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
