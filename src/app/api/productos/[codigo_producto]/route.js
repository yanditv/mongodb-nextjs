
export async function GET() {
    try {
      const connection = await db();
      const data = await connection.collection("productos").find().toArray();
      console.log(data);
      return NextResponse.json(data);
    } catch (error) {
      console.error(error);
      return NextResponse.error();
    }
  }
  