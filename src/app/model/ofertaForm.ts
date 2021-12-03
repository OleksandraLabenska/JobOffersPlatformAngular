export class OfertaForm{
    private titulo: string;
    private descripcion: string;
    private empresa: string;
    private salario: number;
    private ciudad: string;
    private email: string;
    


    constructor(titulo: string, descripcion: string, empresa: string, salario: number, ciudad: string,
        email: string){
            this.titulo = titulo;
            this.descripcion = descripcion;
            this.empresa = empresa;
            this.email = email;
            this.salario = salario;
            this.ciudad = ciudad;
        }

  
    
    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getEmpresa(): string {
        return this.empresa;
    }

    public setEmpresa(empresa: string): void {
        this.empresa = empresa;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getSalario(): number {
        return this.salario;
    }

    public setSalario(salario: number): void {
        this.salario = salario;
    }

    public getCiudad(): string {
        return this.ciudad;
    }

    public setCiudad(ciudad: string): void {
        this.ciudad = ciudad;
    }

    

}

